package app.admg.Repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import app.admg.Model.AttendanceRecord;

@Service
public class AttendanceRecordRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;    

    public List<AttendanceRecord> getAll() {
        
        String sql = "SELECT * FROM ATTENDANCERECORD";

        RowMapper<AttendanceRecord> rowMapper = new BeanPropertyRowMapper<AttendanceRecord>(AttendanceRecord.class);

        List<AttendanceRecord> attendanceRecord = jdbcTemplate.query(sql, rowMapper);

        return attendanceRecord;
    }
}
