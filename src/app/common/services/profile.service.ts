import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8080';
  

  constructor(private http:HttpClient) { }
  
  public getProfileList(){
   return this.http.get(this.baseUrl+'/profile');
  }
}
