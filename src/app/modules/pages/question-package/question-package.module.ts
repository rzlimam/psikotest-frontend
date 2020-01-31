//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//routing & component
import { QuestionPackageRoutingModule } from './question-package-routing.module';
import { QuestionPackageListComponent } from './question-package-list/question-package-list.component';
import { DetailPackageAddComponent } from './detail-package-add/detail-package-add.component';
import { DetailPackageUpdateComponent } from './detail-package-update/detail-package-update.component';
import { AssignedQuestionListComponent } from './assigned-question-list/assigned-question-list.component';

//primeNG
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
import {MessagesModule} from 'primeng/messages';




@NgModule({
  declarations: [QuestionPackageListComponent, DetailPackageAddComponent, DetailPackageUpdateComponent, AssignedQuestionListComponent],
  imports: [
    CommonModule,
    QuestionPackageRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CardModule,
    DialogModule,
    EditorModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    AccordionModule,
    ChartModule,
    ConfirmDialogModule,
    TabViewModule,
    MultiSelectModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    MessagesModule
  ]
})
export class QuestionPackageModule { }
