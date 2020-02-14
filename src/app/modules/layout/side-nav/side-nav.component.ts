import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/services/global.service';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  clicked = false;
  fullname: any;
  liUsers: any;
  disUs: any;
  liql: any;
  disql: any;
  liqt: any;
  disqt: any;
  liqp: any;
  disqp: any;
  liTest: any;
  disTest: any;
  liQuestion: any;
  disQues: any;
  liHome: any;
  disHom: any;
  liCan: any;
  disCan: any;
  liRe: any;
  disRe: any;

  constructor(private srv: GlobalService, private router: Router) {
    this.fullname = srv.getName();
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
      let url = this.router.url
      if (url == "/admin-page/candidates") {
        this.liCan = "active";
        this.disCan = "noclick"
      }
      if (url == "/admin-page") {
        this.liHome = "active";
        this.disHom = "noclick";
      }
      if (url == "/admin-page/users") {
        this.liUsers = "active";
        this.disUs = "noclick";
      }
      if (url == "/admin-page/question-list") {
        this.liql = "active";
        this.liTest = "active"
        this.liQuestion = "active"
        this.disql = "noclick";
        this.disTest = "noclick";
        this.disQues = "noclick";
      }
      if (url == "/admin-page/question-type") {
        this.liTest = "active"
        this.liQuestion = "active"
        this.liqt = "active";
        this.disqt = "noclick";
        this.disTest = "noclick";
        this.disQues = "noclick";
      }
      if (url == "/admin-page/package") {
        this.liqp = "active";
        this.liTest = "active"
        this.liQuestion = "active"
        this.disqp = "noclick";
        this.disTest = "noclick";
        this.disQues = "noclick";
      }
      if (url == "/admin-page/result") {
        this.liTest = "active";
        this.disRe = "noclick";
      }
    });

  }


}
