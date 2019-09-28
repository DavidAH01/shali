import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  showLogin: any = false;
  loginState: any;

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.loginState = this.login.showState()
    this.loginState.subscribe(state => {
      this.showLogin = state;
    })
  }

  ngOnDestroy(){
    if(this.loginState){
      this.loginState.unsubscribe();
    }
  }

  get isShowLogin() {
    return this.showLogin === true;
  }

  closeLoginModal() {
    this.login.toggleState()
  }
}
