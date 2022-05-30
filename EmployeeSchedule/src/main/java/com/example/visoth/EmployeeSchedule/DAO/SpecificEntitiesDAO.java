package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import com.example.visoth.EmployeeSchedule.Entity.ScheduleUserTime;

import java.util.List;

public interface SpecificEntitiesDAO {

    public List<ScheduleUserTime> findAllByScheduleId(int d);
}
