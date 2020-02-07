import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

  constructor(public auth:GlobalService, public router:Router) { }

  canActivate(): boolean{
    if(this.auth.getToken()==null || this.auth.getRole().codeRole !== 'REC'){
      alert("Kamu tidak memiliki akses halaman ini.")
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
