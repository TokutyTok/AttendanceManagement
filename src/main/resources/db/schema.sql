-- 勤怠ユーザ　--
CREATE TABLE IF NOT EXISTS ATTENDANCEUSER(
    userId INT AUTO_INCREMENT NOT NULL,
    userName VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    authority INT NOT NULL DEFAULT 0,
    PRIMARY KEY (userId)
);

-- 勤怠記録 --
CREATE TABLE IF NOT EXISTS ATTENDANCERECORD(
    recordId INT AUTO_INCREMENT NOT NULL,
    userId INT NOT NULL,
    restId INT NOT NULL,
    stamperDate VARCHAR(30) NOT NULL,
    stamper VARCHAR(50),
    attendanceStartTime VARCHAR(30),
    attendanceEndTime VARCHAR(30),
    restTime VARCHAR(30),
    workingHours VARCHAR(10),
    attendanceClassification VARCHAR(1) NOT NULL,
    PRIMARY KEY(recordId, userId, stamperDate)
);

-- 勤怠休憩 --
CREATE TABLE IF NOT EXISTS ATTENDANCEREST(
    restId INT NOT NULL,
    recordId INT NOT NULL,
    stamperDate VARCHAR(30) NOT NULL,
    userId INT NOT NULL,
    restStartTime VARCHAR(30),
    restEndTime VARCHAR(30),
    restTotalTime VARCHAR(30),
    PRIMARY KEY (restId),
    FOREIGN KEY (recordId, userId, stamperDate) REFERENCES ATTENDANCERECORD (recordId, userId, stamperDate)
);