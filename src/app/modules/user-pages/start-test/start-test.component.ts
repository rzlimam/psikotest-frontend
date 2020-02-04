import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/services/global.service';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {
  canName:any;
  paket:any;
  packName:any;
  indeks=0;
  selectedValue:any;

  constructor(private srv:GlobalService) { 
  }
  
   

  ngOnInit() {
    this.canName = this.srv.getName();
    let pack = JSON.parse(localStorage.getItem('questionPackage'));
    this.paket = pack[0].packages;
  }
  nextQuest(i){
    console.log(i)
    this.indeks ++;
    console.log("indeks ke-"+i);
  }
  prevQuest(i){
    console.log(i)
    this.indeks--;
    console.log("indeks ke-"+i);
  }
  numberQuestion(i){
    this.indeks = i;
    console.log("ini "+i);
  }


}
