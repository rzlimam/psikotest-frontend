import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://bootcamp.linovhr.com:8080/psikotest2';
  

  constructor(private http:HttpClient) { }
  
  public getProfileList(){
   return this.http.get(this.baseUrl+'/profile');
  }
}
