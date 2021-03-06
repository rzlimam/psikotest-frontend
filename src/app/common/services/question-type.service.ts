import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient, private glob:GlobalService) { }
  public getAllQuestionType() {
    return this.http.get(this.apiURL + '/questiontype',  this.glob.getHeader());
  }
  public addQuestionType(type:object){
    return this.http.post(this.apiURL+'/questiontype', type);
  }
}
