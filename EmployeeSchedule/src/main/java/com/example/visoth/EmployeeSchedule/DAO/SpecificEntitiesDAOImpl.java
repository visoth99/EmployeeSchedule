package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import com.example.visoth.EmployeeSchedule.Entity.ScheduleUserTime;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class SpecificEntitiesDAOImpl implements SpecificEntitiesDAO{

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<ScheduleUserTime> findAllByScheduleId(int d) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<ScheduleUserTime> query=currentSession.createQuery("from ScheduleUserTime where schedule_id=:dDate",
                ScheduleUserTime.class);
        query.setParameter("dDate",d);
        List<ScheduleUserTime> scheduleUserTimeList=null;
        try {
            scheduleUserTimeList=query.getResultList();

        }catch (Exception e){
            scheduleUserTimeList=null;
        }

        return scheduleUserTimeList;
    }
}
