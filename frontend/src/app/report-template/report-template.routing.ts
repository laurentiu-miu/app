import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ReportTemplateListComponent} from './report-template-list/report-template-list.component';
import {ReportTemplateEditComponent} from './report-template-edit/report-template-edit.component';

const routes: Routes = [
  {
    path: 'reportTemplateEdit',
    component: ReportTemplateEditComponent
  },
  {
    path: 'reportTemplateList',
    component: ReportTemplateListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportTemplateRoutingModule {

}
