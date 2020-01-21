import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { User } from 'src/app/common/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userss:any;

  constructor(private srv:UserService, private router:Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    let resp = this.srv.getAllUser();
    resp.subscribe(res => {this.userss = res; console.log(this.userss)});
    
  }

}
