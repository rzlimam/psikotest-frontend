import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/common/services/report.service';

@Component({
  selector: 'app-testresult-stat',
  templateUrl: './testresult-stat.component.html',
  styleUrls: ['./testresult-stat.component.scss']
})
export class TestresultStatComponent implements OnInit {
  coba: any;

  constructor(private router: Router, private srv: ReportService) { }

  ngOnInit() {
  }

  public getReportCorPerPackage() {
    let resp = this.srv.getReportCrPerPeckage();
    resp.subscribe(res => { this.coba = res; 
      const url = window.URL.createObjectURL(res); 
      window.open(url) });
  }

  public getReportFsPerPeckage() {
    let resp = this.srv.getReportFsPerPeckage();
    resp.subscribe(res => { this.coba = res ; 
      const url = window.URL.createObjectURL(res); 
      window.open(url) });
  }

  public getMostCorrect() {
    let resp = this.srv.getMostCorrect();
    resp.subscribe(res => { this.coba = res ; 
      const url = window.URL.createObjectURL(res); 
      window.open(url) });
  }

  public getMostWrong() {
    let resp = this.srv.getMostWrong();
    resp.subscribe(res => { this.coba = res ; 
      const url = window.URL.createObjectURL(res); 
      window.open(url) });
  }

  public geteasiestPackage() {
    let resp = this.srv.geteasiestPackage();
    resp.subscribe(res => { this.coba = res ; 
      const url = window.URL.createObjectURL(res); 
      window.open(url) });
  }

  public getMostDifficultPackage() {
    let resp = this.srv.getMostDifficultPackage();
    resp.subscribe(res => { this.coba = res ; 
      const url = window.URL.createObjectURL(res); 
      window.open(url) });
  }





}