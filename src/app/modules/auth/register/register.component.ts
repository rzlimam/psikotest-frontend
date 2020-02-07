import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/common/model/User';
import { UserService } from 'src/app/common/services/user.service';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastrService } from 'ngx-toastr';

declare var $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  user: any = new User(null, null, null, null, null)
  users: any;
  pria: string = "Pria";
  wanita: string = "Wanita";

  constructor(private router: Router, private srv: UserService,
    private toastr: ToastrService) {
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

    let resp = this.srv.getAllUser();
    resp.subscribe(res => { this.users = res });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  findById(id) {
    this.srv.getUserById(id).subscribe(data => {
      this.user = data;
    })
  }

  public updateUser(id) {
    let resp = this.srv.getUserById(id);
    return resp.subscribe((data) => this.user = data);
  }

  public update(id) {
    console.log(id);
    let respons = this.srv.updateUser(this.user);
    respons.subscribe((data) => this.user = data);
  }

  saveUser() {
    this.user.isActive = "true";
    this.srv.addUser(this.user).subscribe(data => {
      console.log(data),
      this.toastrSuccess("Silahkan cek email anda untuk melihat password")
      this.router.navigateByUrl('/login')
    }, error =>{
      console.log(error),
      this.toastrFailed(error.error)
    } );

  }

  deleteUser(id) {
    this.srv.deleteById(id).subscribe(data => console.log(data), error => console.log(error));
  }

  toastrSuccess(msg: any){
    this.toastr.success(msg, "Success", {
      timeOut: 8000
    });
  }

  toastrFailed(err: any){
    this.toastr.error(err,"Failed", {
      timeOut:2500
    });
  }

}
