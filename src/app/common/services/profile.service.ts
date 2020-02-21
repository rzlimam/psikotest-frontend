import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8080';
  

  constructor(private http:HttpClient, private glob:GlobalService) { }
  
  public getProfileList(){
   return this.http.get(this.baseUrl+'/user/candidate', this.glob.getHeader());
  }
}
