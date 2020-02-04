import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  token;

  constructor(private storage:StorageMap, private http:HttpClient, private router:Router) { }

  public loginUser(username: string, password:string){
    return this.http.post(this.apiURL+'/login', {username: username, password: password})
    .subscribe((resp:any)=>{
      localStorage.setItem('auth_token', resp[1]);
      localStorage.setItem('profile', JSON.stringify(resp[0]));
      if(resp[0].role.codeRole=='CAN'){
        this.router.navigate(['user-page']);
      }
      else{
        this.router.navigate(['admin-page']);
      }
      console.log(username);
      console.log(password);
  }, (error)=>console.log(error))
  }
  logout(){
    localStorage.removeItem('token');
  }
  public get logIn():boolean{
    return (localStorage.getItem('token') !== null);
  }
}
