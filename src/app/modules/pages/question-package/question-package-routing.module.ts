import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionPackageListComponent } from './question-package-list/question-package-list.component';
import { DetailPackageAddComponent } from './detail-package-add/detail-package-add.component';
import { AssignedQuestionListComponent } from './assigned-question-list/assigned-question-list.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionPackageListComponent
  },
  {
    path: 'add-detail/:id',
    component: DetailPackageAddComponent
  },
  {
    path: 'assign-question',
    component: AssignedQuestionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionPackageRoutingModule { }
