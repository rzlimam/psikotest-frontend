import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PackageDetailService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient, private glob:GlobalService) { }
  public getAllPackageDetail() {
    return this.http.get(this.apiURL + '/packagedetail', this.glob.getHeader());
  }
  public findDetailByIdPack(id){
    return this.http.get(this.apiURL+'/packagedetail/package/'+id, this.glob.getHeader());
  }
  public addPackDetail(packDetail:Object){
    return this.http.post(this.apiURL+'/packagedetail', packDetail, {responseType: 'text' as 'json'});
  }
}
