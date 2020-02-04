import { Component, OnInit } from '@angular/core';
import { QuestionAssignService } from 'src/app/common/services/question-assign.service';
import { GlobalService } from 'src/app/common/services/global.service';
import { QuestionAssign } from 'src/app/common/model/QuestionAssign';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description-test',
  templateUrl: './description-test.component.html',
  styleUrls: ['./description-test.component.scss']
})
export class DescriptionTestComponent implements OnInit {
  userId:any;
  assign: any = new QuestionAssign(null, null, null);
  constructor(private srv:QuestionAssignService, private srv2:GlobalService, private router:Router) {
    this.userId = srv2.getUserID();
  }

  ngOnInit() {
  }
  getQuestion(){
    this.srv.findByUser(this.userId).subscribe(data=>{this.assign = data; console.log(this.assign);
    localStorage.setItem('questionPackage', JSON.stringify(this.assign))
    });
    this.router.navigateByUrl('user-page/package-desc')

  }

}
