import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageDetailService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  public getAllPackageDetail() {
    return this.http.get(this.apiURL + '/packdetail');
  }
}
