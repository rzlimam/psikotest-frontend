import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutingComponent } from './layouting/layouting.component';
import { DescriptionTestComponent } from './description-test/description-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { StartTestComponent } from './start-test/start-test.component';
import { PackageDescriptionComponent } from './package-description/package-description.component';
import { AuthGuardService as Auth } from 'src/app/common/services/auth-guard.service';


const routes: Routes = [
  {
    path: '', component: LayoutingComponent,
      children: [
        {path: '', component: DescriptionTestComponent, canActivate: [Auth]},
        {path: 'package-desc', component: PackageDescriptionComponent, canActivate: [Auth]},
        {path: 'start-test', component: StartTestComponent, canActivate: [Auth]},
        {path: 'finish-test', component: FinishTestComponent, canActivate: [Auth]}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
