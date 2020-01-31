import { Component, OnInit } from '@angular/core';
import { QuestionAssignService } from 'src/app/common/services/question-assign.service';
import { QuestionAssign } from 'src/app/common/model/QuestionAssign';

@Component({
  selector: 'app-assigned-question-list',
  templateUrl: './assigned-question-list.component.html',
  styleUrls: ['./assigned-question-list.component.scss']
})
export class AssignedQuestionListComponent implements OnInit {
  qAssign:any = new QuestionAssign(null, null, null);

  constructor(private srv:QuestionAssignService) { }

  ngOnInit() {
    let resp = this.srv.getAllQuestionAssign();
    resp.subscribe(res=>{this.qAssign=res})
  }

}
