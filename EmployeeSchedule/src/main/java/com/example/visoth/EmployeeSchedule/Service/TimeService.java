package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.Entity.Time;

import java.util.List;

public interface TimeService {

    public List<Time> findALL();
    public Time findById(int  id);
    public void updateOrSave(Time time);
    public void deleteById(int  id);
}
