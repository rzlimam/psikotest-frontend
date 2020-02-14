import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {RegisterComponent} from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    RadioButtonModule
  ]
})
export class AuthModule {
}
