import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/services/global.service';
import { Router } from '@angular/router';
import { DetailApplicantAnswer } from 'src/app/common/model/DetailApplicantAnswer copy';
import { ApplicantAnswer } from 'src/app/common/model/ApplicantAnswer';
import { DetailApplicantAnswerService } from 'src/app/common/services/detail-applicant-answer.service';
import { error } from 'protractor';
import { PackagDetail } from 'src/app/common/model/PackageDetail';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {
  canName:any;
  paket=[];
  packName:any;
  selectedValue:any;
  selectedAnswer = [];
  pakets:any;
  indeksPaket=0;
  indeksQuestion=0;
  isShowQuestion = false;
  isShowInstruction = true;
  pack:any;
  answer: any = new DetailApplicantAnswer();
  canAnswer=[];
  packQ:any;
  isPrev = false;
  countPrev = 0;
  amountTime : number ; 
  interval ;

  constructor(private srv:GlobalService, private srv2:DetailApplicantAnswerService, private router:Router) { 
  }
  ngOnInit() {
    this.answer.applicantAnswer = new ApplicantAnswer(null, null);
    this.canName = this.srv.getName();
    this.pack = JSON.parse(localStorage.getItem('questionPackage'));
    this.pakets = this.pack;
  }
  nextQuest(i){
    console.log(this.answer.applicantAnswer.answer1);
    console.log("Index on next "+i)
    let canAnswerNew = [];
    ++this.indeksQuestion;
    if(this.isPrev == true){
      console.log("aaaa")
      for(let item in this.canAnswer){
        console.log("bbbb");
        if(item == i){
          console.log("cccc");
          let c:DetailApplicantAnswer = new DetailApplicantAnswer();
          c.applicantAnswer = this.answer.applicantAnswer;
          c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
          canAnswerNew.push(JSON.parse(JSON.stringify(c)));
        }
        else{
          canAnswerNew.push(this.canAnswer[item]);
        }
      }
      this.canAnswer = canAnswerNew;

    }
    else{
      this.saveQuestion(i);
    }
    console.log(this.canAnswer);
    console.log("countPrev = "+this.countPrev);
    
    if (this.countPrev <=1) {
      this.isPrev = false;
      this.answer.applicantAnswer = new ApplicantAnswer(null, null);
    }
    else{
      this.answer.applicantAnswer = new ApplicantAnswer(this.canAnswer[this.indeksQuestion].applicantAnswer.answer1, null);
      
    }
    if (this.countPrev >=1){
      --this.countPrev;
    }

    

  }
  prevQuest(i){
    console.log("Index on prev "+i)
    this.isPrev = true;
    ++this.countPrev;
    --this.indeksQuestion;
    this.answer.applicantAnswer = new ApplicantAnswer(this.canAnswer[--i].applicantAnswer.answer1, null);
    console.log(this.answer.applicantAnswer);
  }
  numberQuestion(i){
    this.indeksQuestion = i;
    console.log("ini "+i);
  }
  grabQuestion(i){
    this.isShowQuestion = true;
    this.isShowInstruction = false;
    this.paket = this.pack[i].packages;
    this.amountTime = this.pack[i].packages.amountOfTime;
    this.packQ = this.paket;
    this.indeksQuestion = 0;
    this.isPrev = false;
    this.canAnswer = [];
    this.selectedAnswer = [];
    this.answer.applicantAnswer = new ApplicantAnswer(null, null);

  }
  sumbitQuest(i){
    this.saveQuestion(i);
    this.stopTimer();
    this.srv2.submitAnswer(this.srv.getUserID(),this.canAnswer).
    subscribe(data=>{
      this.aftersubmit(); 
      console.log(data)}
      ,error=>{
        this.aftersubmit();
        console.log(error)}
      )
    
  }
  aftersubmit(){
    ++this.indeksPaket;
    if (this.indeksPaket == this.pakets.length){
      this.router.navigateByUrl('user-page/finish-test')
    }
    else{

      this.isShowInstruction = true;
      this.isShowQuestion = false;
      this.isPrev = false;
    }
  }
  saveQuestion(i){
    let c:DetailApplicantAnswer = new DetailApplicantAnswer();
    c.applicantAnswer = this.answer.applicantAnswer;
    c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
    this.canAnswer.push(JSON.parse(JSON.stringify(c)));
  }

  // untuk tipe soal 2
  nextQuest2(i){
    console.log(this.selectedAnswer);
    console.log(this.countPrev);
    console.log("index on next quest "+i)
    if(this.selectedAnswer.length !==2){
      alert("Jawab yang bener woi!!!")
    }
    else{
      let canAnswerNew = [];
      if(this.isPrev == true){
        for(let item in this.canAnswer){
          if(item == i){
            let c:DetailApplicantAnswer = new DetailApplicantAnswer();
            c.applicantAnswer = this.answer.applicantAnswer;
            c.applicantAnswer.answer1 = this.selectedAnswer[0];
            c.applicantAnswer.answer2 = this.selectedAnswer[1];
            c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
            canAnswerNew.push(JSON.parse(JSON.stringify(c)));
          }
          else{
            canAnswerNew.push(this.canAnswer[item]);
          }
        }
        this.canAnswer = canAnswerNew;
      }
      else{
          let c:DetailApplicantAnswer = new DetailApplicantAnswer();
          c.applicantAnswer = this.answer.applicantAnswer;
          c.applicantAnswer.answer1 = this.selectedAnswer[0];
          c.applicantAnswer.answer2 = this.selectedAnswer[1];
          c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
          this.canAnswer.push(JSON.parse(JSON.stringify(c)));

      } 
      // this.isPrev = false;
      // this.countPrev = 0;
      ++this.indeksQuestion;
      console.log(this.canAnswer);
      if (this.countPrev <=1) {
        this.isPrev = false;
        this.selectedAnswer = [];
      }
      else{
        this.selectedAnswer = [];
        this.selectedAnswer.push(this.canAnswer[this.indeksQuestion].applicantAnswer.answer1)
        this.selectedAnswer.push(this.canAnswer[this.indeksQuestion].applicantAnswer.answer2)
      }
      if (this.countPrev >=1){
        --this.countPrev;
      }

    }
    
  }

  
  prevQuest2(i){
    this.isPrev = true;
    ++this.countPrev;
    --this.indeksQuestion;
    this.selectedAnswer = []   
    this.selectedAnswer.push(this.canAnswer[--i].applicantAnswer.answer1)
    this.selectedAnswer.push(this.canAnswer[i].applicantAnswer.answer2)
    console.log(this.countPrev);
    console.log("indeks on prev "+i);

  }

  sumbitQuest2(i, isTimer?:boolean){
    
    if(!isTimer && this.selectedAnswer.length!==2){
      alert("Jawab yang bener woi!")
    }
    else{
      this.stopTimer();
      let c:DetailApplicantAnswer = new DetailApplicantAnswer();
      c.applicantAnswer = this.answer.applicantAnswer;
      c.applicantAnswer.answer1 = this.selectedAnswer[0];
      c.applicantAnswer.answer2 = this.selectedAnswer[1];
      c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
      this.canAnswer.push(JSON.parse(JSON.stringify(c)));
      this.srv2.submitAnswer(this.srv.getUserID(),this.canAnswer).
      subscribe(data=>{
        this.aftersubmit(); 
        console.log(data);
        }, 
        error=>
        {this.aftersubmit();
        console.log(error)
        })
      
    }
    
  }

  sumbitTimer() {
    console.log(this.pack[this.indeksPaket]);
    
    if(this.pack[this.indeksPaket].packages.questionType.questionTypeTitle=="pilihan ganda 2"){
      this.sumbitQuest2(this.indeksPaket, true);
    }
    else{
      this.sumbitQuest(this.indeksPaket);
    }
  }

  hours: number;
  minutes: number;
  seconds: number;
  pot: number;
  // timeLeft: number = this.amountTime;
  startTimer() {
    this.minutes = this.amountTime % 60;
    this.pot = this.amountTime / 60;
    this.hours = Math.floor(this.pot);
    this.seconds = 0;
    // this.minutes = 0;
    // this.seconds = 5;
    console.log(this.hours);
    console.log(this.minutes);
    console.log(this.seconds);
    this.interval = setInterval(() => {
      if (this.seconds == 0) {
        this.minutes--;
        console.log(this.minutes);
      }
      if (this.minutes == -1) {
        this.hours--;
        this.minutes = 59;
      }
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.seconds = 59;
      }
      if (this.hours < 0) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.stopTimer();
        // console.log(this.i2);
        // this.grabQuestion(this.i2 + 1);
        this.sumbitTimer();
      }
    }, 1000)
  }


  stopTimer() {
    clearInterval(this.interval);
  }


}
