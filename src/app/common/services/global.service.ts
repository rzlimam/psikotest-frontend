import { Injectable } from '@angular/core';

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
}
