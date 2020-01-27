import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPagesRoutingModule } from './user-pages-routing.module';
import { DescriptionTestComponent } from './description-test/description-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { LayoutingComponent } from './layouting/layouting.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CheckboxModule} from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import { StartTestComponent } from './start-test/start-test.component';
import {CardModule} from 'primeng/card';
import { UserLayoutModule } from '../user-layout/user-layout.module';



@NgModule({
  declarations: [DescriptionTestComponent, FinishTestComponent, LayoutingComponent, StartTestComponent],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    ScrollPanelModule,
    CheckboxModule,
    PanelModule,
    SplitButtonModule,
    ButtonModule,
    CardModule,
    UserLayoutModule
  ]
})
export class UserPagesModule { }
