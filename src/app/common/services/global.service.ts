import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }
  getName(){
    var profile = JSON.parse(localStorage.getItem('profile'));
    return profile.profile.profileName;
  }
  getUserID(){
    var userID = JSON.parse(localStorage.getItem('profile'));
    return userID.userId;
  }
  getRole(){
    var roleCode = JSON.parse(localStorage.getItem('profile'))
    return roleCode.role;
  }
  getToken(){
    var iniToken = localStorage.getItem('auth_token');
    return iniToken;
  }
  getHeader():any{
    let headers = { 'headers' : {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + this.getToken()
    }}
    return headers
  }
  getHeaderDownload():any{
    let headers = { 'headers' : {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + this.getToken()
    }, 'responseType': 'blob'}
    return headers

  }
}
