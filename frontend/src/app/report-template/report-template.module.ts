import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportTemplateListComponent} from './report-template-list/report-template-list.component';
import {ReportTemplateRoutingModule} from './report-template.routing';
import {SharedModule} from 'app/shared/shared.module';
import { ReportTemplateEditComponent } from './report-template-edit/report-template-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, ReportTemplateRoutingModule],
  declarations: [ReportTemplateListComponent, ReportTemplateEditComponent]
})
export class ReportTemplateModule { }
