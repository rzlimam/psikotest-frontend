import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailApplicantAnswer } from 'src/app/common/model/DetailApplicantAnswer copy';
import { DetailApplicantAnswerService } from 'src/app/common/services/detail-applicant-answer.service';

@Component({
  selector: 'app-testresult-detail',
  templateUrl: './testresult-detail.component.html',
  styleUrls: ['./testresult-detail.component.scss']
})
export class TestresultDetailComponent implements OnInit {

  det:any = new DetailApplicantAnswer();
  id:any;

  constructor(private route : ActivatedRoute, private srv:DetailApplicantAnswerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.srv.getByHAA(this.id).subscribe(data=>{this.det = data});
  }



}
