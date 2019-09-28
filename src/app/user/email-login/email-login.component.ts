import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {
  form: FormGroup;

  serverMessage: any;
  loading = false;

  constructor(private angularFs : AngularFirestore, private router: Router, private afAuth: AngularFireAuth, private fb: FormBuilder,private UserServiceService:UserServiceService) {
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ]
    });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    try {
      const resp = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(resp.user.uid)
      this.UserServiceService.getUser(resp.user.uid).subscribe(data => {
        console.log(data[0])
        localStorage.setItem('auth', JSON.stringify(data[0]));
        this.router.navigate(['/posts'])
      })
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}