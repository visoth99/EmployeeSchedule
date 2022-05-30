package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;


@Repository
public class SpecificDateScheduleDAOImpl implements SpecificScheduleDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Schedule> findAllByDate(String m, String y) {

        Session currentSession = entityManager.unwrap(Session.class);
        Query<Schedule> query=currentSession.createQuery("from Schedule where date like :mDate and date like :yDate",Schedule.class);
        query.setParameter("mDate",m+"%");
        query.setParameter("yDate","%"+y);
        List<Schedule> schedules=null;
        try {
            schedules=query.getResultList();

        }catch (Exception e){
            schedules=null;
        }

        return schedules;
    }

    @Override
    public Schedule findByDate(String s) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Schedule> query=currentSession.createQuery("from Schedule where date=:pDate",Schedule.class);
        query.setParameter("pDate",s);
        Schedule schedule=null;
        try {
            schedule=query.getSingleResult();

        }catch (Exception e){
            schedule=null;
        }

        return schedule;
    }
}
