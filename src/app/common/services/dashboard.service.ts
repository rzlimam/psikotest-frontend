import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http:HttpClient) { }

  public dashboardContent(){
    return this.http.get(this.apiURL + '/dashboard')
  }
  public ambilToken(token){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      
    })
    headers = headers.append('Authorization', 'Bearer ' + token)
    return this.http.get(this.apiURL + '/report/report1/pdf', {headers: headers});
  }
}
