import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutingComponent } from './layouting/layouting.component';
import { DescriptionTestComponent } from './description-test/description-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';


const routes: Routes = [
  {
    path: '', component: LayoutingComponent,
      children: [
        {path: '', component: DescriptionTestComponent},
        {path: 'finish-test', component: FinishTestComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
