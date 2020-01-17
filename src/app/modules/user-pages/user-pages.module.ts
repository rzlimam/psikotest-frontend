import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPagesRoutingModule } from './user-pages-routing.module';
import { DescriptionTestComponent } from './description-test/description-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { LayoutingComponent } from './layouting/layouting.component';


@NgModule({
  declarations: [DescriptionTestComponent, FinishTestComponent, LayoutingComponent],
  imports: [
    CommonModule,
    UserPagesRoutingModule
  ]
})
export class UserPagesModule { }
