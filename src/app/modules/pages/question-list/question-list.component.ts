import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/common/services/question.service';
import { Router } from '@angular/router';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Questions } from 'src/app/common/model/Question';
import { PackageService } from 'src/app/common/services/package.service';
import { QuestionTypeService } from 'src/app/common/services/question-type.service';
import { QuestionType } from 'src/app/common/model/QuestionType';
import { QuestionData } from 'src/app/common/model/QuestionData';
import { validAnswer } from 'src/app/common/model/ValidAnswer';
import { error } from 'protractor';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  providers: [ConfirmationService],
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
  cols1:any[];
  question:any = new Questions(null,null,null,null,null,null,null,null);
  columns = [];
  display: boolean = false;
  newQuestion:boolean;
  msgs: Message[]=[];
  displayUpd: boolean = false;


  constructor(private srv:QuestionService, private srv2:QuestionTypeService, 
    private confirmationService:ConfirmationService, private toastr: ToastrService, private router:Router) { }

  ngOnInit() {
    this.question.data = new QuestionData(null,null,null,null,null,null);
    this.question.answer = new validAnswer(null, null);
    let resp = this.srv2.getAllQuestionType();
    resp.subscribe((data)=>this.qType=data);
    this.getQuestion();
    this.cols1 = [
      {field : 'questionTitle', header : 'Question Title'},
      {field : 'questionDate', header : 'Question Date'},
      {field : 'questionType.questionTypeTitle', header : 'Question Type'},
      {field : 'data.question', header : 'Question'}
    ];
  }
  public getQuestion(){
    let resp = this.srv.getQuestionList();
    resp.subscribe(res => {this.qList = res});
  }

  showDialog() {
    this.display = true;
  }
  showDialogToAdd(){
    this.newQuestion = true;
    this.display = true;
  }
  reload(){
    this.router.navigateByUrl('admin-page/question-list')
  }
  saveQuestion(){
    console.log(this.question);
    this.srv.addQuestion(this.question)
    .subscribe(data=>{
      console.log(data),
      this.toastrSuccess("add question success"),
      this.display = false,
      this.getQuestion()
      
    } , error=>{
      console.log(error),
      this.toastrFailed(error.error)
    });
    // this.display = false;
  }
  deleteQuestion(id){
    this.srv.deleteById(id).subscribe(data=>{
      console.log(data),
      this.toastrSuccess("delete question success"),
      this.getQuestion()
    }, error=>{
      console.log(error),
      this.toastrFailed(error.error)
    } ); 
  }
  public updateQuest(id) {
    this.displayUpd = true;
    let resp = this.srv.getQuestionById(id);
    return resp.subscribe((data) => this.question = data);
  }

  public updateQuestion(id) {
    console.log(id);
    console.log(this.question);
    let respons = this.srv.updatequest(this.question);
    respons.subscribe((data)=>{
      this.question = data
      this.toastrSuccess("update question success"),
      this.getQuestion(),
      this.displayUpd = false;
    }, err=>{
      this.toastrFailed(err.error),
      this.displayUpd = true;
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
