import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http:HttpClient, private glob:GlobalService) { }

  public dashboardContent(){
    return this.http.get(this.apiURL + '/dashboard', this.glob.getHeader());
  }
  public ambilToken(){
    console.log(this.glob.getHeader());
    return this.http.get(this.apiURL + '/question', this.glob.getHeader());
  }
}
