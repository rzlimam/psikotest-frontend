import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { CandidateComponent } from './candidate/candidate.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestiontypeComponent } from './questiontype/questiontype.component';
import { UserComponent } from './user/user.component';
import { AuthGuardAdminService as AuthGuard } from 'src/app/common/services/auth-guard-admin.service';

const routes: Routes = [
  {
    path: '', component: PagesComponent, 
      children: [
        {path: '', component: DashBoardComponent, canActivate: [AuthGuard]},
        {path: 'candidates', component: CandidateComponent, canActivate: [AuthGuard]},
        {path: 'question-list', component: QuestionListComponent, canActivate: [AuthGuard]},
        {path: 'question-type', component: QuestiontypeComponent, canActivate: [AuthGuard]},
        {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
        {path: 'package', canActivate: [AuthGuard], loadChildren: () => import('./question-package/question-package.module').then(m=>m.QuestionPackageModule)},
        {path: 'result', canActivate: [AuthGuard], loadChildren: () =>import('./test-result/test-result.module').then(m=>m.TestResultModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
