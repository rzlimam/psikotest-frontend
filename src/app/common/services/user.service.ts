import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:8080';


  constructor(private http: HttpClient, private glob:GlobalService) { }
  public getAllUser() {
    return this.http.get(this.apiURL + '/user', this.glob.getHeader());
  }
  public getUserById(id) {
    return this.http.get(this.apiURL + '/user/' + id);
  }
  public addUser(user: object) {
    return this.http.post(this.apiURL + '/user', user);
  }
  public deleteById(id) {
    return this.http.delete(this.apiURL + '/user/' + id);
  }
  public updateUser(user: object) {
    return this.http.put(this.apiURL + '/user', user);
  }
  public findByEmail(email){
    return this.http.get(this.apiURL + '/email/'+email);
  }
  public forgotPassword(email){
    return this.http.post(this.apiURL + '/forgotpassword/'+email, email);
  }
}
