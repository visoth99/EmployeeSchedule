package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;

import java.util.List;

public interface SpecificScheduleDAO {

    public List<Schedule> findAllByDate(String s);

    public Schedule findByDate(String s);
}
