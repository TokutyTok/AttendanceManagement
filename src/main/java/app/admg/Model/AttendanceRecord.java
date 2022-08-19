package app.admg.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceRecord {

    private int recordId;
    private int userId;
    private int restId;
    private String stamperDate;
    private String stamper;
    private String attendanceStartTime;
    private String attendanceEndTime;
    private String restTime;
    private String workingHours;
    private String attendanceClassification;
}
