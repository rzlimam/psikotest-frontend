import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { CandidateComponent } from './candidate/candidate.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestiontypeComponent } from './questiontype/questiontype.component';
import { QuestionpackageComponent } from './questionpackage/questionpackage.component';
import { ResultTestComponent } from './result-test/result-test.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [PagesComponent, DashBoardComponent, CandidateComponent, QuestionListComponent, QuestiontypeComponent, QuestionpackageComponent, ResultTestComponent, UserComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    CardModule,
    HttpClientModule
  ]
})
export class PagesModule {
}
