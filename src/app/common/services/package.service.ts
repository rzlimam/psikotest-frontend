import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http: HttpClient) { }
  public getAllPackage() {
    return this.http.get(this.apiURL + '/packages');
  }
  public getById(id){
    return this.http.get(this.apiURL+'/packages/'+id);
  }
  public assignPackage(assPack:Object):Observable<Object>{
    return this.http.post(this.apiURL+'/questionassign/', assPack, {responseType:'text' as 'json'});
  }
}
