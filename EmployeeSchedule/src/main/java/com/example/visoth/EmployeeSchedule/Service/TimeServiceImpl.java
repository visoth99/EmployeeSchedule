package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.DAO.TimeDAO;
import com.example.visoth.EmployeeSchedule.Entity.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeServiceImpl implements TimeService{

    @Autowired
    private TimeDAO timeDAO;

    @Override
    public List<Time> findALL() {
        return timeDAO.findAll();
    }

    @Override
    public Time findById(int id) {
        Optional<Time> result=timeDAO.findById(id);
        Time time=null;
        if(result.isPresent()){
            time=result.get();
        }else {
            throw new RuntimeException("Did not find time"+id);
        }
        return time;
    }

    @Override
    public void updateOrSave(Time time) {
        timeDAO.save(time);
    }

    @Override
    public void deleteById(int id) {
        timeDAO.deleteById(id);
    }
}
