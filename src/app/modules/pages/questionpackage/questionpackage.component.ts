import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/common/services/package.service';
import { Package } from 'src/app/common/model/Package';
import { ProfileService } from 'src/app/common/services/profile.service';
import { QuestionAssign } from 'src/app/common/model/QuestionAssign';
import { SelectItem } from 'primeng/api/selectitem';
import { __assign } from 'tslib';
@Component({
  selector: 'app-questionpackage',
  templateUrl: './questionpackage.component.html',
  styleUrls: ['./questionpackage.component.scss']
})
export class QuestionpackageComponent implements OnInit {
  qPackage:any;
  selectedPackage: string[] = [];
  items: SelectItem[];
  candidate:any;
  packDetail:any=new Package(null, null, null, null, null, null,null);
  assign:any = new QuestionAssign(null, null, null);
  cols3:any[];
  display3:boolean;
  display4:boolean;
  assignDsp:boolean;
  displayUpdate: boolean;
  p: any = new Package(null, null, null, null, null, null,null);
  id:any;

  constructor(private srv3:PackageService, private srv4:ProfileService) { }
  ngOnInit() {
    let resp = this.srv4.getProfileList();
    resp.subscribe((data)=> this.candidate=data);
    let resp2 = this.srv3.getAllPackage();
    resp2.subscribe(res => {this.qPackage= res});
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({label:'Item ' + i, value: 'Item ' + i});
    }
  }
  findbyid() {
    this.srv3.getById(this.id).subscribe(data => {
      this.p = data;
    })
  }
  public updatePackage(id) {
    this.displayUpdate = true;
    let resp = this.srv3.getById(id);
    return resp.subscribe((data) => this.p = data);
  }
  showDialogUpd() {
    this.displayUpdate = true;
  }
  showDialog3() {
    this.display3 = true;
  }
  showDialog4(packageId) {
    this.display4 = true;
    this.srv3.getById(packageId).subscribe(data=>this.packDetail=data, error=>console.log(error));
  }
  assignPackage(){
    this.assignDsp = true;
  }
  saveAssign(){
    console.log(this.assign);
    let b = [];
    for(let i in this.assign.packagee){
      let c:any = new QuestionAssign(null, null, null);
      c.user = this.assign.user;
      c.packagee = this.assign.packagee[i];
      let d = b.push(c);
    }
    console.log(b)
    this.srv3.assignPackage(b)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.assignDsp = false;
  }
  savePackage() {
    this.p.isActive = "true";
    this.srv3.addPackage(this.p).subscribe(data => console.log(data), error => console.log(error));
    this.display3 = false;
  }

  updPackage() {
    this.p.isActive = "true";
    this.srv3.updPackage(this.p).subscribe(data => console.log(data), error => console.log(error));
    this.displayUpdate = false;
  }
  public update(id) {
    console.log(id);
    let respons = this.srv3.updPackage(this.p);
    respons.subscribe((data) => this.p = data);
    this.displayUpdate = false;
  }

  deletePackage(id) {
    this.srv3.deleteById(id).subscribe(data => console.log(data), error => console.log(error));
  }

}
