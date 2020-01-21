import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';

  constructor(private http:HttpClient) { }
  public getQuestionList(){
    return this.http.get(this.apiURL+'/question');
  }
}
