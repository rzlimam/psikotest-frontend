import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from 'src/app/common/services/login.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username = '';
  password = '';

  constructor(private srv:LoginService) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }
  logIn(){
    console.log("you are logging in")
    this.srv.loginUser(this.username, this.password)
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

}
