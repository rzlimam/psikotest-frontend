import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailApplicantAnswerService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  public getAllDetailApplicantAnswer() {
    return this.http.get(this.apiURL + '/daa');
  }
}
