import {Component, Input, OnInit} from '@angular/core';
import {ReportTemplate} from '../../shared/report-template/reportTemplate.module';
import {RestApiService} from '../../shared/restapi.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-report-template-edit',
  templateUrl: './report-template-edit.component.html',
  styleUrls: ['./report-template-edit.component.css']
})
export class ReportTemplateEditComponent implements OnInit {

  @Input()
  selectedReportTemplate: ReportTemplate;
  reportTemplateForm: FormGroup;
  isFormSubmited: boolean | false;


  constructor(private apiService: RestApiService, private fb: FormBuilder) {
    if (this.selectedReportTemplate !== null) {
      this.selectedReportTemplate = new ReportTemplate(0, '', '', '');
    }
  }

  saveReportTemplate() {
    this.selectedReportTemplate = null;
  }
  ngOnInit() {
    console.log('ReportTemplateEditComponent' + this.apiService.getScope() );
    this.selectedReportTemplate = this.apiService.getScope() as ReportTemplate;
    this.buildForm();
  }

  buildForm() {
    this.reportTemplateForm = this.fb.group({
      'reportName': [this.selectedReportTemplate.reportName, [Validators.required]],
      'reportDescription': [this.selectedReportTemplate.reportDescription, [Validators.required]],
      'sqlDescription': [this.selectedReportTemplate.sqlDescription, [Validators.required]],
    });

    this.reportTemplateForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  private onValueChanged(data?: any) {
    if (!this.reportTemplateForm) { return; }
    const form = this.reportTemplateForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  submit() {
    this.selectedReportTemplate = this.reportTemplateForm.value;
    console.log(JSON.stringify(this.selectedReportTemplate));
    this.apiService.updateReportTemplate(this.selectedReportTemplate)
        .catch(error => console.log(error));
    this.isFormSubmited = true;
  }

  public formErrors = {
    'reportName': '',
    'reportDescription': '',
    'sqlDescription': ''
  };

  public validationMessages = {
    'reportName': {
      'required': 'Report name is required'
    },
    'reportDescription': {
      'required': 'Report description is required'
    },
    'sqlDescription': {
      'required': 'Sql is required'
    }
  };

}
