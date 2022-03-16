package app.admg.Service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

@Service
public class StampService {

    // 時刻を取得
    public LocalDateTime getLocalDateTime() {
        LocalDateTime localDateTime = LocalDateTime.now();

        return localDateTime;
    }
}
