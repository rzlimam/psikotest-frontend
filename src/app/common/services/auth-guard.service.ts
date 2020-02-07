import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth:GlobalService, public router:Router) { }

  canActivate(): boolean{
    if(this.auth.getToken()==null || this.auth.getRole().codeRole !== 'CAN'){
      alert("Kamu tidak memiliki akses halaman ini.")
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
