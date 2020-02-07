import { Component, OnInit } from '@angular/core';
import { QuestionAssignService } from 'src/app/common/services/question-assign.service';
import { GlobalService } from 'src/app/common/services/global.service';
import { QuestionAssign } from 'src/app/common/model/QuestionAssign';
import { Router } from '@angular/router';
import { HeaderApplicantAnswerService } from 'src/app/common/services/header-applicant-answer.service';
import { HeaderApplicantAnswer } from 'src/app/common/model/HeaderApplicantAnswer';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-description-test',
  templateUrl: './description-test.component.html',
  styleUrls: ['./description-test.component.scss'],
  providers: [MessageService]
})
export class DescriptionTestComponent implements OnInit {
  userId:any;
  assign: any = new QuestionAssign(null, null, null);
  head: any = new HeaderApplicantAnswer(null, null, null, null, null, null)
  currentDate = new Date();
  isChecked = [];
  constructor(private srv:QuestionAssignService, private srv2:GlobalService, private srv3:HeaderApplicantAnswerService, private router:Router) {
    this.userId = srv2.getUserID();
  }

  ngOnInit() {
  }
  getQuestion(){
    if(this.isChecked.length < 1){
      alert("Anda harus menyetuji syarat dan ketentuan yang tertera")
    }
    else{
      let header = new HeaderApplicantAnswer(null, null, null, null, null, null)
      header.user = this.srv2.getUserID();
      this.srv.findByUser(this.userId).subscribe(data=>{this.assign = data; console.log(this.assign);
      localStorage.setItem('questionPackage', JSON.stringify(this.assign));
      this.router.navigateByUrl('user-page/start-test');
      });
      
    }
    

  }

}
