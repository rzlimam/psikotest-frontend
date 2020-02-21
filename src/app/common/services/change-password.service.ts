import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  private apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient, private glob:GlobalService) { }

  public changePassword(user : any){
    return this.http.put(this.apiURL + '/user', user, this.glob.getHeader());
  }

  public getUserById(id){
    return this.http.get(this.apiURL + '/user/'+id , this.glob.getHeader());
  }
}
