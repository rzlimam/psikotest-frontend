import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionAssignService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2';
  constructor(private http: HttpClient) { }
  public getAllQuestionAssign() {
    return this.http.get(this.apiURL + '/questionassign');
  }
  public findByUser(id){
    return this.http.get(this.apiURL + '/questionassign/question/' + id);
  }
}
