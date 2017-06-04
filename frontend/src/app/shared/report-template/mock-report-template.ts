import {ReportTemplate} from './reportTemplate.module';

export const MOCK_RT = [
  new ReportTemplate(1, 'Number of students', 'The number of students in 2017-2018', 'select 1 from dual'),
  new ReportTemplate(2, 'Number of girls', 'The number of girls in 2017-2018', 'select 1 from dual'),
  new ReportTemplate(3, 'Number of boys', 'The number of boys in 2017-2018', 'select 1 from dual'),
  new ReportTemplate(4, 'Number of schools', 'The number of schools in 2017-2018', 'select 1 from dual'),
  new ReportTemplate(5, 'Number of teachers', 'The number of teachers in 2017-2018', 'select 1 from dual')
];
