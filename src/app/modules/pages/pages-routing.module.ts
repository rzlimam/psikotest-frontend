import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { CandidateComponent } from './candidate/candidate.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionpackageComponent } from './questionpackage/questionpackage.component';
import { QuestiontypeComponent } from './questiontype/questiontype.component';
import { ResultTestComponent } from './result-test/result-test.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, 
      children: [
        {path: '', component: DashBoardComponent},
        {path: 'candidates', component: CandidateComponent},
        {path: 'question-list', component: QuestionListComponent},
        {path: 'question-package', component: QuestionpackageComponent},
        {path: 'question-type', component: QuestiontypeComponent},
        {path: 'test-result', component: ResultTestComponent},
        {path: 'users', component: UserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
