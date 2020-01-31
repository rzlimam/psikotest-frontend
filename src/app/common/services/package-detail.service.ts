import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageDetailService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http: HttpClient) { }
  public getAllPackageDetail() {
    return this.http.get(this.apiURL + '/packagedetail');
  }
  public findDetailByIdPack(id){
    return this.http.get(this.apiURL+'/packagedetail/package/'+id);
  }
  public addPackDetail(packDetail:Object){
    return this.http.post(this.apiURL+'/packagedetail', packDetail, {responseType: 'text' as 'json'});
  }
}
