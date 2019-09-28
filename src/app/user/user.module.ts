import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleSigninDirective } from './google-signin.directive';
import { EmailLoginComponent } from './email-login/email-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoogleSigninDirective, EmailLoginComponent],
  exports: [GoogleSigninDirective, EmailLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
