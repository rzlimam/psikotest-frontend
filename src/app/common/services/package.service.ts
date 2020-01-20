import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  public getAllPackage() {
    return this.http.get(this.apiURL + '/packages');
  }
}
