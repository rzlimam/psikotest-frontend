import { Component, OnInit } from '@angular/core';
import { QuestionAssign } from 'src/app/common/model/QuestionAssign';
import { QuestionAssignService } from 'src/app/common/services/question-assign.service';
import { GlobalService } from 'src/app/common/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-description',
  templateUrl: './package-description.component.html',
  styleUrls: ['./package-description.component.scss']
})
export class PackageDescriptionComponent implements OnInit {
  userId:any;
  assign: any = new QuestionAssign(null, null, null);
  constructor(private srv:QuestionAssignService, private srv2:GlobalService, private router:Router) { }

  ngOnInit() {
  }

  getQuestion(){
    this.router.navigateByUrl('user-page/start-test')
  }

}
