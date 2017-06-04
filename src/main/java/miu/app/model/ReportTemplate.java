package miu.app.model;

import miu.app.utils.annotations.EntityName;

import javax.persistence.Entity;

/**
 * Created by laurentiumiu on 5/27/17.
 */
@Entity
@EntityName("reportTemplate")
public class ReportTemplate extends BaseEntity {

    private String reportName;
    private String reportDescription;
    private String sqlDescription;

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

    public String getSqlDescription() {
        return sqlDescription;
    }

    public void setSqlDescription(String sqlDescription) {
        this.sqlDescription = sqlDescription;
    }
}
