import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http: HttpClient) { }
  public getAllQuestionType() {
    return this.http.get(this.apiURL + '/questiontype');
  }
  public addQuestionType(type:object){
    return this.http.post(this.apiURL+'/questiontype', type);
  }
}
