package miu.app;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by laurentiumiu on 5/25/17.
 */
@org.springframework.web.bind.annotation.RestController
public class RestController {

    @RequestMapping(
            value = "/reportTemplate/getAll",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection> getBaseEntities() {


        List<ReportTemplate> list = new ArrayList<>();
        list.add(new ReportTemplate(1L,"Number of students", "The number of students in 2017-2018", "select 1 from dual"));
        list.add(new ReportTemplate(2L,"Number of students", "The number of students in 2017-2018", "select 1 from dual"));
        list.add(new ReportTemplate(3L,"Number of students", "The number of students in 2017-2018", "select 1 from dual"));
        list.add(new ReportTemplate(4L,"Number of students", "The number of students in 2017-2018", "select 1 from dual"));
        return new ResponseEntity<Collection>(list, HttpStatus.OK);
    }
    @RequestMapping(
            value = "/reportTemplate/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public <ReportTemplate> ResponseEntity<ReportTemplate> updateBaseEntity(
            @RequestBody ReportTemplate baseEntity) {
        System.out.print(baseEntity);
        return null;
    }
    class ReportTemplate{
        private Long id;
        private String reportName;
        private String reportDescription;
        private String sql;

        public ReportTemplate(Long id, String reportName, String reportDescription, String sql) {
            this.id = id;
            this.reportName = reportName;
            this.reportDescription = reportDescription;
            this.sql = sql;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getReportName() {
            return reportName;
        }

        public void setReportName(String reportName) {
            this.reportName = reportName;
        }

        public String getReportDescription() {
            return reportDescription;
        }

        public void setReportDescription(String reportDescription) {
            this.reportDescription = reportDescription;
        }

        public String getSql() {
            return sql;
        }

        public void setSql(String sql) {
            this.sql = sql;
        }
    }
}
