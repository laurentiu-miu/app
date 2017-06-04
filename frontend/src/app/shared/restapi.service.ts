import { Injectable } from '@angular/core';
import {ReportTemplate} from './report-template/reportTemplate.module';
import {MOCK_RT} from './report-template/mock-report-template';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestApiService {

  private url = 'api/web/reportTemplate';
  private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(private http: Http) {}

  getListOfTemplates(): Promise<ReportTemplate[]> {
    return this.http.get(this.url+"/getAll")
      .toPromise()
      .then(response => response.json() as ReportTemplate[])
      .catch(this.handleError);
  }

  updateReportTemplate(reportTemplate: ReportTemplate): Promise<any> {
    let updateUrl = `${this.url}/${reportTemplate.id}`;

    return this.http.put(updateUrl, reportTemplate, { headers: this.headers })
      .toPromise()
      .then(this.success)
      .catch(this.handleError);
  }

  private scope: any | boolean = false;

  public getScope(): any | boolean {
    return this.scope;
  }

  public setScope(scope: any): void {
    this.scope = scope;
  }

  private handleError(error: any) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  private success(): Promise<any> {
    return Promise.resolve();
  }
}
