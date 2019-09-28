import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isAuth = false;
  constructor(private login: LoginService) { }

  ngOnInit() {
  }
  
  toggleModalLogin(e){
    e.preventDefault();
    this.login.toggleState()
  }
}
