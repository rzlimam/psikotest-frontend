import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TestResultRoutingModule } from './test-result-routing.module';
import { TestresultListComponent } from './testresult-list/testresult-list.component';
import { TestresultStatComponent } from './testresult-stat/testresult-stat.component';

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
import { TestresultDetailComponent } from './testresult-detail/testresult-detail.component';


@NgModule({
  declarations: [TestresultListComponent, TestresultStatComponent, TestresultDetailComponent],
  imports: [
    CommonModule,
    TestResultRoutingModule,
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
    ToastModule
  ]
})
export class TestResultModule { }
