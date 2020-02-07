import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { CandidateComponent } from './candidate/candidate.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestiontypeComponent } from './questiontype/questiontype.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, 
      children: [
        {path: '', component: DashBoardComponent},
        {path: 'candidates', component: CandidateComponent},
        {path: 'question-list', component: QuestionListComponent},
        {path: 'question-type', component: QuestiontypeComponent},
        {path: 'users', component: UserComponent},
        {path: 'package', loadChildren: () => import('./question-package/question-package.module').then(m=>m.QuestionPackageModule)},
        {path: 'result', loadChildren: () =>import('./test-result/test-result.module').then(m=>m.TestResultModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
