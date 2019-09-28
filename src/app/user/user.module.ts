import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { EmailLoginComponent } from './email-login/email-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GoogleSigninDirective, EmailLoginComponent],
  exports: [GoogleSigninDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
