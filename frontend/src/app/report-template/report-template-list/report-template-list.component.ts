import { Component, OnInit } from '@angular/core';
import {ReportTemplate} from '../../shared/report-template/reportTemplate.module';
import {RestApiService} from '../../shared/restapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-report-template-list',
  templateUrl: './report-template-list.component.html',
  styleUrls: ['./report-template-list.component.css']
})
export class ReportTemplateListComponent implements OnInit {
  listOfReportTemplate: ReportTemplate[];
  selectedReportTemplate: ReportTemplate;

  constructor(private apiService: RestApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getListOfTemplates()
      .then(players => this.listOfReportTemplate = players)
      .catch(error => console.log(error));
  }

  selectReportTemplate(selectedReportTemplate: ReportTemplate) {
    console.log('selectReportTemplate ' + selectedReportTemplate.reportName);
    this.selectedReportTemplate = selectedReportTemplate;
    this.apiService.setScope(selectedReportTemplate);
  }

}
