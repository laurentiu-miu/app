export class ReportTemplate {
  id: number;
  reportName: string;
  reportDescription: string;
  sqlDescription: string;


  constructor(id: number, reportName: string, reportDescription: string, sqlDescription: string) {
    this.id = id;
    this.reportName = reportName;
    this.reportDescription = reportDescription;
    this.sqlDescription = sqlDescription;
  }
}
