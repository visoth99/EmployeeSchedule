package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Time;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeDAO extends JpaRepository<Time,Integer> {
}
