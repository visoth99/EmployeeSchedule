package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;


import java.util.List;

public interface ScheduleService {

    public List<Schedule> findALL();
    public Schedule findById(int  id);
    public void updateOrSave(Schedule schedule);
    public void deleteById(int  id);
    public List<Schedule> findAllByDate(String m ,String y);
    public Schedule findByDate(String s);
}
