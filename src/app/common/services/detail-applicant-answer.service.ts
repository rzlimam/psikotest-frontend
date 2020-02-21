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
  public getByHAA(id){
    return this.http.get(this.apiURL + '/daa/haa/' + id);
  }
  public submitAnswer(id, appAnswer){
    return this.http.post(this.apiURL + '/daa/insert/' +id, appAnswer)
  }
}
