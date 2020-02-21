import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiURL = 'http://localhost:8080';

  constructor(private http:HttpClient, private glob:GlobalService) { }
  public getQuestionList(){
    return this.http.get(this.apiURL+'/question', this.glob.getHeader());
  }
  public addQuestion(question:object){
    return this.http.post(this.apiURL+'/question', question, this.glob.getHeader());
  }
  public deleteById(id){
    return this.http.delete(this.apiURL+'/question/'+id, this.glob.getHeader());
  }
  public getByQType(id){
    return this.http.get(this.apiURL+'/question/questiontype/'+id, this.glob.getHeader());
  }
  public getQuestionById(id){
    return this.http.get(this.apiURL+'/question/'+id, this.glob.getHeader());
  }
  public updatequest(question: object) {
    return this.http.put(this.apiURL + '/question', question, this.glob.getHeader());
  }
}
