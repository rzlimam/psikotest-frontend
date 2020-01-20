import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  public getAllRole() {
    return this.http.get(this.apiURL + '/role');
  }
}
