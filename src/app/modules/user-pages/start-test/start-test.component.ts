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

  constructor(private srv:GlobalService, private srv2:DetailApplicantAnswerService, private router:Router) { 
  }
  ngOnInit() {
    this.answer.applicantAnswer = new ApplicantAnswer(null, null);
    this.canName = this.srv.getName();
    this.pack = JSON.parse(localStorage.getItem('questionPackage'));
    // this.paket = this.pack[0].packages;
    this.pakets = this.pack;
  }
  nextQuest(i){
    console.log(i)
    //console.log("Jawaban "+ JSON.stringify(this.answer.applicantAnswer));
    let canAnswerNew = [];
    if(this.isPrev == true){
      for(let item in this.canAnswer){
        if(item == i){
          let a = this.packQ.packageDetails[i].packageQuestionId;
          console.log(a);
          let c:DetailApplicantAnswer = new DetailApplicantAnswer();
          c.applicantAnswer = this.answer.applicantAnswer;
          c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
          canAnswerNew.push(JSON.parse(JSON.stringify(c)));
          console.log(JSON.stringify(c));
        }
        else{
          canAnswerNew.push(this.canAnswer[item]);
        }
      }
      this.canAnswer = canAnswerNew;

    }
    else{
      // let a = this.packQ.packageDetails[i].packageQuestionId;
      // console.log(a);
      this.saveQuestion(i);
      console.log("Jawaban "+ JSON.stringify(this.answer.applicantAnswer));
      console.log(this.canAnswer);
      // this.indeksQuestion ++;
      console.log("indeks ke-"+i);
      console.log("indeks question "+this.indeksQuestion)
    }
    this.indeksQuestion ++;
    // this.answer.applicantAnswer = new ApplicantAnswer(this.canAnswer[i].applicantAnswer.answer1, null);
    this.isPrev = false;

  }
  prevQuest(i){
    console.log(i)
    this.isPrev = true;
    --this.indeksQuestion;
    this.answer.applicantAnswer = new ApplicantAnswer(this.canAnswer[this.indeksQuestion].applicantAnswer.answer1, null);

    console.log("indeks ke-"+i);
    console.log("indeks question "+this.indeksQuestion)
  }
  numberQuestion(i){
    this.indeksQuestion = i;
    console.log("ini "+i);
  }
  grabQuestion(i){
    this.isShowQuestion = true;
    this.isShowInstruction = false;
    this.paket = this.pack[i].packages;
    this.packQ = this.paket;
    this.indeksQuestion = 0;
    this.isPrev = false;
    this.canAnswer = [];
  }
  sumbitQuest(i){
    this.saveQuestion(i);
    //save question
    this.srv2.submitAnswer(this.srv.getUserID(),this.canAnswer).
    subscribe(data=>console.log(data), error=>console.log(error))
    this.indeksPaket ++;
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
    console.log(JSON.stringify(c));
    this.canAnswer.push(JSON.parse(JSON.stringify(c)));
  }

  // untuk tipe soal 2
  nextQuest2(i){
    console.log(this.selectedAnswer);
    let hitung = (this.indeksQuestion+1)*2;
    console.log(hitung + "<>" + this.selectedAnswer.length);
    console.log(this.isPrev);
    console.log(this.countPrev);
    console.log(this.selectedAnswer.length);
    
    
    if(this.isPrev == true){
      if(this.selectedAnswer.length-(2) !== hitung && this.selectedAnswer.length!== hitung){
        console.log("Jawaban harus 2 yaaa!");
        alert("Jawaban harus 2 cuy")    
      }else{
        console.log(i)
        // console.log("Jawaban "+ this.selectedAnswer);
        let canAnswerNew = [];
        if(this.isPrev == true){
          for(let item in this.canAnswer){
            if(item == i){
              let a = this.packQ.packageDetails[i].packageQuestionId;
              console.log(a);
              let c:DetailApplicantAnswer = new DetailApplicantAnswer();
              c.applicantAnswer = this.answer.applicantAnswer;
              c.applicantAnswer.answer1 = this.selectedAnswer[this.selectedAnswer.length-1];
              c.applicantAnswer.answer2 = this.selectedAnswer[this.selectedAnswer.length-2];
              c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
              canAnswerNew.push(JSON.parse(JSON.stringify(c)));
              console.log(JSON.stringify(c));
            }
            else{
              canAnswerNew.push(this.canAnswer[item]);
            }
          }
          this.canAnswer = canAnswerNew;
        }
        this.indeksQuestion ++;  
      }
    // else if(this.selectedAnswer.length !== hitung){
    //   console.log("Jawaban harus 2!");
    //   alert("Jawaban harus 2 cuy")
    // }
    // else{
      // console.log(i)
      // // console.log("Jawaban "+ this.selectedAnswer);
      // let canAnswerNew = [];
      // if(this.isPrev == true){
      //   for(let item in this.canAnswer){
      //     if(item == i){
      //       let a = this.packQ.packageDetails[i].packageQuestionId;
      //       console.log(a);
      //       let c:DetailApplicantAnswer = new DetailApplicantAnswer();
      //       c.applicantAnswer = this.answer.applicantAnswer;
      //       c.applicantAnswer.answer1 = this.selectedAnswer[this.selectedAnswer.length-1];
      //       c.applicantAnswer.answer2 = this.selectedAnswer[this.selectedAnswer.length-2];
      //       c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
      //       canAnswerNew.push(JSON.parse(JSON.stringify(c)));
      //       console.log(JSON.stringify(c));
      //     }
      //     else{
      //       canAnswerNew.push(this.canAnswer[item]);
      //     }
      //   }
      //   this.canAnswer = canAnswerNew;
    }else{
      if(this.selectedAnswer.length !== hitung){
        console.log("Jawaban harus 2 cuy!");
        alert("Jawaban harus 2 yaaaa")    
      }else{
        let c:DetailApplicantAnswer = new DetailApplicantAnswer();
        c.applicantAnswer = this.answer.applicantAnswer;
        c.applicantAnswer.answer1 = this.selectedAnswer[this.selectedAnswer.length-1];
        c.applicantAnswer.answer2 = this.selectedAnswer[this.selectedAnswer.length-2];
        c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
        console.log(JSON.stringify(c));
        this.canAnswer.push(JSON.parse(JSON.stringify(c)));
        // console.log("Jawaban "+ JSON.stringify(this.answer.applicantAnswer));
        console.log("indeks ke-"+i);
        console.log("indeks question "+this.indeksQuestion)
        this.indeksQuestion ++;
      } 
    }
      
    this.isPrev = false;
    this.countPrev = 0;
    console.log(this.canAnswer);
    // this.selectedAnswer = [];
  }

  
  prevQuest2(i){
    // console.log(this.canAnswer[0].applicantAnswer);
    // console.log(i)
    this.isPrev = true;
    this.indeksQuestion --;
    ++this.countPrev;
    console.log(this.countPrev);
    
    // this.selectedAnswer.push(JSON.parse(JSON.stringify(this.canAnswer[this.indeksQuestion])).applicantAnswer.answer1);
    // this.selectedAnswer.push(JSON.parse(JSON.stringify(this.canAnswer[this.indeksQuestion])).applicantAnswer.answer2);
    console.log("indeks ke-"+i);
    console.log("indeks question "+this.indeksQuestion)
  }

  sumbitQuest2(i){
    let c:DetailApplicantAnswer = new DetailApplicantAnswer();
        c.applicantAnswer = this.answer.applicantAnswer;
        c.applicantAnswer.answer1 = this.selectedAnswer[this.selectedAnswer.length-1];
        c.applicantAnswer.answer2 = this.selectedAnswer[this.selectedAnswer.length-2];
        c.packageQuestion = new PackagDetail(this.packQ.packageDetails[i].packageQuestionId, null, null);
        console.log(JSON.stringify(c));
        this.canAnswer.push(JSON.parse(JSON.stringify(c)));
    this.srv2.submitAnswer(this.srv.getUserID(),this.canAnswer).
    subscribe(data=>console.log(data), error=>console.log(error))
    this.indeksPaket ++;
    if (this.indeksPaket == this.pakets.length){
      this.router.navigateByUrl('user-page/finish-test')
    }
    else{
      this.isShowInstruction = true;
      this.isShowQuestion = false;
      this.isPrev = false;
    }
  }


}
