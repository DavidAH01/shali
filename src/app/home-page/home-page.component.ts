import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { LoginService } from '../services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserServiceService } from 'src/app/services/user-service.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  form: FormGroup;

  serverMessage: any;
  loading: boolean = false;
  showLogin: any = false;
  loginState: any;
  loginStateSubscribe: any;

  constructor(private login: LoginService, private router: Router, private fb: FormBuilder, private angularFs : AngularFirestore, private afAuth: AngularFireAuth, private UserServiceService:UserServiceService) { }

  ngOnInit() {
    this.loginState = this.login.showState()
    this.loginStateSubscribe = this.loginState.subscribe(state => {
      this.showLogin = state;
    })

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ]
    });
  }

  ngOnDestroy(){
    if(this.loginStateSubscribe){
      this.loginStateSubscribe.unsubscribe();
    }
  }

  get isShowLogin() {
    return this.showLogin === true;
  }

  closeLoginModal() {
    this.login.toggleState()
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    this.loading = true;

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const password = this.password.value;

    try{
      const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      const data = {
        UUID: resp.user.uid,
        name,
        email,
        phone
      }
      this.UserServiceService.addUserInfo(data);
      localStorage.setItem('auth', JSON.stringify(data));
      this.router.navigate(['/posts'])
    } catch (err) {
      this.serverMessage = err;
    }
    this.loading = false;
  }
}
