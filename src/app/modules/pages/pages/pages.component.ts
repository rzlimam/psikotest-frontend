import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  stringifiedData: any;  
  
  

  constructor() {
  }

  ngOnInit() {
    
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini');
  }

}
