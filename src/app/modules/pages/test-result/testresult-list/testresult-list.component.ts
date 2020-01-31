import { Component, OnInit } from '@angular/core';
import { HeaderApplicantAnswer } from 'src/app/common/model/HeaderApplicantAnswer';
import { HeaderApplicantAnswerService } from 'src/app/common/services/header-applicant-answer.service';
import { DetailApplicantAnswerService } from 'src/app/common/services/detail-applicant-answer.service';
import { DetailApplicantAnswer } from 'src/app/common/model/DetailApplicantAnswer copy';

@Component({
  selector: 'app-testresult-list',
  templateUrl: './testresult-list.component.html',
  styleUrls: ['./testresult-list.component.scss']
})
export class TestresultListComponent implements OnInit {
  result: any =  new HeaderApplicantAnswer(null, null, null, null, null, null);
  det: any = new DetailApplicantAnswer(null, null, null, null, null);
  data: any;
  display: boolean;
  detailAns: boolean;
  id:any;

  constructor(private service:HeaderApplicantAnswerService, private service2:DetailApplicantAnswerService) {
    this.data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
  }

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

}
