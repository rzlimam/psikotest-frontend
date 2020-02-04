import {Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/common/services/global.service';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  fullname:any;
  constructor(private srv:GlobalService) {
    this.fullname = srv.getName();
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }
  

}
