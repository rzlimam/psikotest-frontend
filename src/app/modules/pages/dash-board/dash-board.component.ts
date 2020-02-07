import {Component, OnInit} from '@angular/core';
import { DashboardService } from 'src/app/common/services/dashboard.service';
import { GlobalService } from 'src/app/common/services/global.service';
import { log } from 'util';
import { error } from 'protractor';

interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  data: any;
  dashData: any;

  constructor(private srv:DashboardService, private glb:GlobalService) {
    this.data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Peserta Lolos Psikotest',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40, 50, 90, 77, 40, 50]
            },
            {
                label: 'Peserta Tidak Lolos Psikotest',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90, 33, 56, 77, 98, 5]
            }
        ]
    }
}

  ngOnInit() {
    let resp = this.srv.dashboardContent();
    resp.subscribe(res=>{this.dashData = res});
  }
  getToken(){
    this.srv.ambilToken(this.glb.getToken()).subscribe(res=>{console.log('berhasil')}, 
    error=>{console.log(error)});
    }
  }


