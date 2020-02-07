//angular module
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//component & load module
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { CandidateComponent } from './candidate/candidate.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestiontypeComponent } from './questiontype/questiontype.component';
import { UserComponent } from './user/user.component';

//primeNG module
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {EditorModule} from 'primeng/editor';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TabViewModule} from 'primeng/tabview';
import {MultiSelectModule} from 'primeng/multiselect';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [PagesComponent, DashBoardComponent, CandidateComponent, QuestionListComponent, QuestiontypeComponent, UserComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    CardModule,
    HttpClientModule,
    DialogModule,
    EditorModule,
    InputTextareaModule,
    InputTextModule,
    RadioButtonModule,
    AccordionModule,
    ChartModule,
    ConfirmDialogModule,
    TabViewModule,
    MultiSelectModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ToastModule
    ]
})
export class PagesModule {
}
