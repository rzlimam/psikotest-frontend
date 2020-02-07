import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';


  constructor(private http: HttpClient) { }
  public getAllUser() {
    return this.http.get(this.apiURL + '/user');
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
}
