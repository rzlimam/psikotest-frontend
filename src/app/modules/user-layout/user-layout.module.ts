import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';


@NgModule({
  declarations: [UserHeaderComponent, UserFooterComponent],
  imports: [
    CommonModule,
    UserLayoutRoutingModule
  ]
})
export class UserLayoutModule { }
