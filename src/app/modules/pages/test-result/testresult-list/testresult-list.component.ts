import { Component, OnInit } from '@angular/core';
import { HeaderApplicantAnswer } from 'src/app/common/model/HeaderApplicantAnswer';
import { HeaderApplicantAnswerService } from 'src/app/common/services/header-applicant-answer.service';
import { DetailApplicantAnswerService } from 'src/app/common/services/detail-applicant-answer.service';
import { DetailApplicantAnswer } from 'src/app/common/model/DetailApplicantAnswer copy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testresult-list',
  templateUrl: './testresult-list.component.html',
  styleUrls: ['./testresult-list.component.scss']
})
export class TestresultListComponent implements OnInit {
  result: any =  new HeaderApplicantAnswer(null, null, null, null, null, null);
  det: any = new DetailApplicantAnswer();
  data: any;
  display: boolean;
  detailAns: boolean;
  id:any;

  constructor(private service:HeaderApplicantAnswerService, private service2:DetailApplicantAnswerService,
    private router:Router) {  }

  ngOnInit() {
    let resp = this.service.getAllHeaderApplicantAnswer();
    resp.subscribe(res=>{this.result=res;});

  }
  findDetail(id){
    this.detailAns = true;
    console.log(id);
    this.service2.getByHAA(id).subscribe(data=>{this.det=data;
      console.log(this.det[0]);
    })
  }
  toStat(){
    this.router.navigateByUrl('admin-page/result/stat')
  }

}
