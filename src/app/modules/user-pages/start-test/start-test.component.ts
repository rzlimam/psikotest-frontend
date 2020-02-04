import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/services/global.service';
import { Router } from '@angular/router';

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
  pakets:any;
  indeksPaket=0;
  indeksQuestion=0;
  isShowQuestion = false;
  isShowInstruction = true;
  pack:any;

  constructor(private srv:GlobalService, private router:Router) { 
  }
  
   

  ngOnInit() {
    this.canName = this.srv.getName();
    this.pack = JSON.parse(localStorage.getItem('questionPackage'));
    // this.paket = this.pack[0].packages;
    this.pakets = this.pack;
  }
  nextQuest(i){
    console.log(i)
    this.indeksQuestion ++;
    console.log("indeks ke-"+i);
    console.log("indeks question "+this.indeksQuestion)
  }
  prevQuest(i){
    console.log(i)
    this.indeksQuestion --;
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
    this.indeksQuestion = 0;
  }
  sumbitQuest(){

    this.indeksPaket ++;
    if (this.indeksPaket == this.pakets.length){
      this.router.navigateByUrl('user-page/finish-test')
    }
    else{
      this.isShowInstruction = true;
      this.isShowQuestion = false;
    }
    
    
  }


}
