import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestresultListComponent } from './testresult-list/testresult-list.component';
import { TestresultStatComponent } from './testresult-stat/testresult-stat.component';
import { TestresultDetailComponent } from './testresult-detail/testresult-detail.component';


const routes: Routes = [
  {
    path: '',
    component: TestresultListComponent
  },
  {
    path: 'stat',
    component: TestresultStatComponent
  },
  {
    path:'detail/:id',
    component : TestresultDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestResultRoutingModule { }
