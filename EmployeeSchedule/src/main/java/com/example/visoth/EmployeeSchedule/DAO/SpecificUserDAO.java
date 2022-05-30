package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.ScheduleUserTime;
import com.example.visoth.EmployeeSchedule.Entity.User;

import java.util.List;

public interface SpecificUserDAO {

    public User findByEmail(String s);
}
