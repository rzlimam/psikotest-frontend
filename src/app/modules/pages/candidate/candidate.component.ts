import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/common/model/Profile';
import { ProfileService } from 'src/app/common/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  display:boolean;
  selectedProfile:Profile;
  newProfile: boolean;
  profiles:any;

  constructor(private srv:ProfileService, private router:Router) { }

  ngOnInit() {
    this.getProfile();
  }
  getProfile(){
    let resp = this.srv.getProfileList();
    resp.subscribe(res => {this.profiles = res});
  }
  showDialogCandidate() {
    this.display = true;
  }
}
