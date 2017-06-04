import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';



const routes: Routes = [
  {
    path: 'rpTemplate',
    loadChildren: 'app/report-template/report-template.module#ReportTemplateModule'
  }, {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
