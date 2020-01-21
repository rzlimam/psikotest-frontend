import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/common/services/question.service';
import { Router } from '@angular/router';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class QuestionListComponent implements OnInit {
  qList:any;
  qType:any;
  cols:any[];
  columns = [];
  datas = [ 1, 2 ];
  dropdownOptions = [
      { label: 'X', value: 1 },
      { label: 'Y', value: 2 },
  ];

  constructor(private srv:QuestionService, private router:Router) { }

  ngOnInit() {
    this.getQuestion();
    this.cols = [
      {field : 'questionTitle', header : 'Question Title'},
      {field : 'questionDate', header : 'Question Date'},
      {field : 'questionType.questionTypeTitle', header : 'Question Type'},
      {field : 'data.question', header : 'Question'}
    ];
    this.columns = [0];

  }
  public getQuestion(){
    let resp = this.srv.getQuestionList();
    resp.subscribe(res => {this.qList = res});
  }

}
