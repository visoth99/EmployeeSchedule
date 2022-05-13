package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.DAO.EntitiesDAO;
import com.example.visoth.EmployeeSchedule.Entity.ScheduleUserTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntityServiceImpl implements EntityLinkService{

    @Autowired
    private EntitiesDAO entitiesDAO;

    @Override
    public List<ScheduleUserTime> findALL() {
        return entitiesDAO.findAll();
    }

    @Override
    public ScheduleUserTime findById(int id) {
        Optional<ScheduleUserTime> result=entitiesDAO.findById(id);
        ScheduleUserTime scheduleUserTime=null;
        if(result.isPresent()){
            scheduleUserTime=result.get();
        }else {
            throw new RuntimeException("Did not find ScheduleUserTime "+id);
        }
        return scheduleUserTime;
    }

    @Override
    public void updateOrSave(ScheduleUserTime scheduleUserTime) {
        entitiesDAO.save(scheduleUserTime);
    }

    @Override
    public void deleteById(int id) {
        entitiesDAO.deleteById(id);
    }
}
