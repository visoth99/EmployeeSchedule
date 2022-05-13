package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.ScheduleUserTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntitiesDAO extends JpaRepository<ScheduleUserTime,Integer> {
}
