import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from 'src/app/common/services/question-type.service';
import { QuestionType } from 'src/app/common/model/QuestionType';
import { error } from 'protractor';

@Component({
  selector: 'app-questiontype',
  templateUrl: './questiontype.component.html',
  styleUrls: ['./questiontype.component.scss']
})
export class QuestiontypeComponent implements OnInit {
  qType:any;
  display2:boolean = false;
  cols2:any[];
  type:any = new QuestionType(null,null,null,null);

  constructor(private srv2:QuestionTypeService) { }

  ngOnInit() {
    this.getQuestionType();
    this.cols2 = [
      {field: 'questionTypeTitle', header: 'Title'},
      {field: 'answerType.amountOfAnswer', header: 'Total Answer'}
    ];
  }
  showDialog2(){
    this.display2 = true;
  }
  public getQuestionType(){
    let resp = this.srv2.getAllQuestionType();
    resp.subscribe(res => {this.qType = res});
  }
  saveQuestionType(){
    this.srv2.addQuestionType(this.type).subscribe(data=>console.log(data), error=>console.log(error));
    this.display2 = false;
  }

}
