package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import com.example.visoth.EmployeeSchedule.Entity.ScheduleUserTime;
import com.example.visoth.EmployeeSchedule.Entity.Time;

import java.util.List;

public interface EntityLinkService {

    public List<ScheduleUserTime> findALL();
    public ScheduleUserTime findById(int  id);
    public void updateOrSave(ScheduleUserTime scheduleUserTime);
    public void deleteById(int  id);
    public List<ScheduleUserTime> findAllByScheduleId(int d);
}
