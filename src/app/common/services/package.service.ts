import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient, private glob:GlobalService) { }
  public getAllPackage() {
    return this.http.get(this.apiURL + '/packages', this.glob.getHeader());
  }
  public getAll(){
    return this.http.get(this.apiURL + '/packages/getAll', this.glob.getHeader());
  }
  public getById(id){
    return this.http.get(this.apiURL+'/packages/'+id, this.glob.getHeader());
  }
  public assignPackage(assPack:Object):Observable<Object>{
    return this.http.post(this.apiURL+'/questionassign/', assPack, {responseType:'text' as 'json'});
  }
  public addPackage(packages: object) {
    return this.http.post(this.apiURL + '/packages', packages, this.glob.getHeader());
  }
  public updPackage(packages: object) {
    return this.http.put(this.apiURL + '/packages', packages, this.glob.getHeader());
  }
  public deleteById(id) {
    return this.http.delete(this.apiURL + '/packages/' + id, this.glob.getHeader());
  }
}
