import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/model/User';
import { GlobalService } from 'src/app/common/services/global.service';
import { ChangePasswordService } from 'src/app/common/services/change-password.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  user:any = new User(this.getUser(),null,null,null,null);
  userId: any;
  
  constructor(private glob: GlobalService, private srv: ChangePasswordService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.userId = this.glob.getUserID();
    console.log(this.userId);    
  }

  getUser(){
    this.userId = this.glob.getUserID();
    let resp = this.srv.getUserById(this.userId);
    return resp.subscribe((data) => this.user = data);
  }

  changePassword(){
    let resp = this.srv.changePassword(this.user);
    resp.subscribe((data) =>{
      this.user = data,
      console.log(data),
      this.toastrSuccess("update password success");
      this.router.navigateByUrl('admin-page');
    }, err=>{
      this.toastrFailed(err.error);
    });
  }

  
  toastrSuccess(msg: any){
    this.toastr.success(msg, "Success")
  }

  toastrFailed(error: any){
    this.toastr.error(error,"Failed", {
      timeOut: 1000
    });
  }

}
