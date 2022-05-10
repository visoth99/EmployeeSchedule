package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;


public interface ScheduleDAO extends JpaRepository<Schedule, Integer > {
}
