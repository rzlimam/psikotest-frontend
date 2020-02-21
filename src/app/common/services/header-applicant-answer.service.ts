import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderApplicantAnswerService {

  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getAllHeaderApplicantAnswer() {
    return this.http.get(this.apiURL + '/haa');
  }
  public getHeaderById(id){
    return this.http.get(this.apiURL + '/haa/' +id);
  }
  public addApplicantAnswer(head:object){
    return this.http.post(this.apiURL + '/haa', head);
  }
}
