import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { User } from 'src/app/common/model/User';
import { error } from 'util';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email:any;
  email2:any;
  user:any = new User(null, null, null, null, null)
  constructor(private srv:UserService) { }

  ngOnInit() {
  }

  verify(){
    this.srv.findByEmail(this.email).
      subscribe(res=>{this.email=res;
        console.log(this.email);     
      if(this.email){
        console.log("Email terdaftar");
        this.srv.forgotPassword(this.email.profile.email).subscribe(res=>alert("Berhasil"), error=>alert("Gagal"))
      } else{
        console.log("Tidak terdaftar");}}, error=>alert("Email tidak terdaftar"))
      }
    }
