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
  public addQuestion(question:object){
    return this.http.post(this.apiURL+'/question', question);
  }
  public deleteById(id){
    return this.http.delete(this.apiURL+'/question/'+id);
  }
  public getByQType(id){
    return this.http.get(this.apiURL+'/question/questiontype/'+id);
  }
}
