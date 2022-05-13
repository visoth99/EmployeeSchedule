package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.DAO.ScheduleDAO;
import com.example.visoth.EmployeeSchedule.DAO.SpecificScheduleDAO;
import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleServiceImpl implements ScheduleService{

    @Autowired
    private ScheduleDAO scheduleDAO;

    @Autowired
    private SpecificScheduleDAO specificScheduleDAO;

    @Override
    public List<Schedule> findALL() {
        return scheduleDAO.findAll();
    }

    @Override
    public Schedule findById(int  id) {
        Optional<Schedule> result=scheduleDAO.findById(id);
        Schedule schedule=null;
        if(result.isPresent()){
            schedule=result.get();
        }else {
            throw new RuntimeException("Did not find schedule "+id);
        }
        return schedule;
    }

    @Override
    public void updateOrSave(Schedule schedule) {
        scheduleDAO.save(schedule);
    }

    @Override
    public void deleteById(int  id) {
        scheduleDAO.deleteById(id);
    }

    @Override
    public List<Schedule> findAllByDate(String s) {
        return specificScheduleDAO.findAllByDate(s);
    }
}
