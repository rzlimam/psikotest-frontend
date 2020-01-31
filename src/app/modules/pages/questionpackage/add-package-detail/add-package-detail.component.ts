import { Component, OnInit } from '@angular/core';
import { PackageDetailService } from 'src/app/common/services/package-detail.service';
import { PackagDetail } from 'src/app/common/model/PackageDetail';
import { error } from 'protractor';

@Component({
  selector: 'app-add-package-detail',
  templateUrl: './add-package-detail.component.html',
  styleUrls: ['./add-package-detail.component.scss']
})
export class AddPackageDetailComponent implements OnInit {
  details:any;
  detail:any = new PackagDetail(null, null, null);
  cols:any[];
  selectedQuestion: PackagDetail;

  constructor(private srv:PackageDetailService) { }

  ngOnInit() {
    let resp = this.srv.getAllPackageDetail();
    resp.subscribe((data)=>this.details=data);
    this.cols=[
      {field : 'question.questionTitle', header : 'Question Title'},
      {field : 'question.questionType.questionTypeTitle', header : 'Question Type'},
      {field : 'question.dateOfQuestion', header : 'Question Date'}
    ];
  }
  pickQuestion(){
    console.log(this.detail);
    let b = [];
    for(let i in this.detail.question){
      let c:any = new PackagDetail(null, null, null);
      c.package = this.detail.package;
      c.question = this.detail.question[i];
      let d = b.push(c);
    }
    console.log(b)
    this.srv.addPackDetail(b).subscribe(data=>console.log(data), error=>console.log(error));
  }

}
