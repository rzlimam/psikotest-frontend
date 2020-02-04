import { Component, OnInit } from '@angular/core';
import { PackageDetailService } from 'src/app/common/services/package-detail.service';
import { PackagDetail } from 'src/app/common/model/PackageDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/common/services/question.service';
import { Questions } from 'src/app/common/model/Question';
import { PackageService } from 'src/app/common/services/package.service';
import { Package } from 'src/app/common/model/Package';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-package-add',
  templateUrl: './detail-package-add.component.html',
  styleUrls: ['./detail-package-add.component.scss'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
  providers: [ConfirmationService]
})
export class DetailPackageAddComponent implements OnInit {
  msgs: Message[] = [];
  details:any;
  detail:any = new PackagDetail(null, null, null);
  pack:any = new Package(null, null, null, null, null, null, null);
  question:any = new Questions(null, null, null, null, null, null, null, null);
  cols:any[];
  viewQues = false;
  selectedQuestion: PackagDetail;
  id:any;
  idQT:any;

  constructor(private srv:PackageDetailService, private srv3:PackageService, private route:ActivatedRoute, 
    private srv2:QuestionService, private confirmationService: ConfirmationService,
    private toastr: ToastrService) { }

  ngOnInit() {
    let resp = this.srv.getAllPackageDetail();
    resp.subscribe((data)=>this.details=data);
    this.id = this.route.snapshot.paramMap.get('id');
    this.srv3.getById(this.id).subscribe(data=>{this.pack=data;
          console.log(data);
          this.idQT = this.pack.questionType.questionTypeId;
          let resp2 = this.srv2.getByQType(this.idQT);
          resp2.subscribe((data)=>this.question=data);
    });
    this.cols=[
      {field : 'question.questionTitle', header : 'Question Title'},
      {field : 'question.questionType.questionTypeTitle', header : 'Question Type'},
      {field : 'question.dateOfQuestion', header : 'Question Date'}
    ];
    
  }
  pickQuestion(){
    this.confirmationService.confirm({
      message: 'Are you sure?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(this.selectedQuestion);
        let b = [];
        for(let i in this.selectedQuestion){
          let c:any = new PackagDetail(null, null, null);
          c.packages = this.pack;
          c.question = this.selectedQuestion[i];
          b.push(c); 
        }
        console.log(JSON.stringify(b));
        this.srv.addPackDetail(b).subscribe(data=>{
          console.log(data),
          this.toastrSuccess("pick question success"),
          this.reload();
        } , error=>{
          console.log(error),
          this.toastrFailed(error.error)
        } );
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Berhasil'}];
        
      }
    });
    }
    reload(){
      location.href = "admin-page/package"
    }
    viewQuestion(id) {
      console.log("saa" + id);
      this.viewQues = true;
      this.srv2.getQuestionById(id).subscribe(data => {
        console.log("sas" + data);
        this.question = data;
      })
    }

    toastrSuccess(msg: any){
      this.toastr.success(msg, "Success")
    }
  
    toastrFailed(error: any){
      this.toastr.error(error,"Failed", {
        timeOut: 1000
      });
    }

}
