import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerTypeService {
  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  public getAllAnswerType() {
    return this.http.get(this.apiURL + '/answerType');
  }
}
