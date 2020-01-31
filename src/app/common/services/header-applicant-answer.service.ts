import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderApplicantAnswerService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http: HttpClient) { }

  public getAllHeaderApplicantAnswer() {
    return this.http.get(this.apiURL + '/haa');
  }
  public getHeaderById(id){
    return this.http.get(this.apiURL + '/haa/' +id);
  }
}
