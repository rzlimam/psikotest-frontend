import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/common/services/package.service';
import { Package } from 'src/app/common/model/Package';
import { ProfileService } from 'src/app/common/services/profile.service';
import { QuestionAssign } from 'src/app/common/model/QuestionAssign';
import { SelectItem } from 'primeng/api/selectitem';
import { __assign } from 'tslib';
import { PackageDetailService } from 'src/app/common/services/package-detail.service';
import { PackagDetail } from 'src/app/common/model/PackageDetail';
import { QuestionTypeService } from 'src/app/common/services/question-type.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-question-package-list',
  templateUrl: './question-package-list.component.html',
  styleUrls: ['./question-package-list.component.scss']
})
export class QuestionPackageListComponent implements OnInit {

  qPackage:any;
  qPackages:any;
  qType:any;
  selectedPackage: string[] = [];
  items: SelectItem[];
  candidate:any;
  packDetail:any=new Package(null, null, null, null, null, null,null);
  assign:any = new QuestionAssign(null, null, null);
  cols3:any[];
  display3:boolean;
  display4:boolean;
  assignDsp:boolean;
  displayDet: boolean;
  displayUpdate: boolean;
  p: any = new Package(null, null, null, null, null, null,null);
  detail:any = new PackagDetail(null, null, null);
  id:any;

  constructor(private srv3:PackageService, private srv4:ProfileService, private srv:PackageDetailService,
    private srv2:QuestionTypeService, private router:Router, private toastr: ToastrService) { }
  ngOnInit() {
    let resp = this.srv4.getProfileList();
    resp.subscribe((data)=> this.candidate=data);

    let resp2 = this.srv3.getAllPackage();
    resp2.subscribe(res => {this.qPackage= res});

    let resp3 = this.srv2.getAllQuestionType();
    resp3.subscribe(res => {this.qType = res});

    let resp4 = this.srv3.getAll();
    resp4.subscribe(res => {this.qPackages = res});

    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({label:'Item ' + i, value: 'Item ' + i});
    }
    
  }
  
  reload(){
    let resp2 = this.srv3.getAllPackage();
    resp2.subscribe(res => {this.qPackage= res});
  }

  findbyid(id) {
    this.display4 = true;
    this.srv3.getById(id).subscribe(data => {
      this.p = data; this.findDetailByPackId(this.p.packageId)
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
    for(let i in this.assign.packages){
      let c:any = new QuestionAssign(null, null, null);
      c.user = this.assign.user;
      c.packages = this.assign.packages[i];
      let d = b.push(c);
    }
    console.log(b)
    this.srv3.assignPackage(b)
    .subscribe(data=>{
      console.log(data),
      this.toastrSuccess("question assigned"),
      this.assignDsp = false;
      location.href = "admin-page/package/assign-question";
    } , error=>{
      console.log(error),
      this.toastrFailed(error.error),
      this.assignDsp = true;
    } );
    
  }
  savePackage() {
    console.log(this.p);
    this.p.isActive = "true";
    this.srv3.addPackage(this.p)
    .subscribe(data =>{
      console.log(data),
      this.toastrSuccess("add package success"),
      this.reload(),
      this.display3 = false;
    } , error =>{
      console.log(error),
      this.toastrFailed(error.error),
      this.display3 = true;
    } );
    
  }

  updPackage() {
    this.p.isActive = "true";
    this.srv3.updPackage(this.p).subscribe(data => console.log(data), error => console.log(error));
    this.displayUpdate = false;
  }
  public update(id) {
    console.log(id);
    let respons = this.srv3.updPackage(this.p);
    respons.subscribe((data) =>{
      this.p = data,
      this.toastrSuccess("update package success"),
      this.reload(),
      this.displayUpdate = false;
    }, err=>{
      this.toastrFailed(err.error),
      this.displayUpdate = true;
    } );
    
  }

  deletePackage(id) {
    this.srv3.deleteById(id).subscribe(data =>{
      console.log(data),
      this.toastrSuccess("delete package success"),
      this.reload()
    } , error =>{
      console.log(error),
      this.toastrFailed(error.error)
    } );
  }

  findDetailByIdPack(id){
    this.srv.findDetailByIdPack(id).subscribe(data=>{
      this.detail = data;
    })
  }
  addDetailPackage(id){
    this.router.navigateByUrl('admin-page/package/add-detail/'+id);
  }

  findDetailByPackId(idpack) {
    this.display4 = true;
    console.log(idpack)
    console.log(this.detail);
    this.srv.findDetailByIdPack(idpack).subscribe(data => {
      this.detail = data; console.log(this.detail);
    })
  }

  toastrSuccess(msg: any){
    this.toastr.success(msg, "Success")
  }

  toastrFailed(error: any){
    this.toastr.error(error,"Failed", {
      timeOut: 1000
    });
  }

}
