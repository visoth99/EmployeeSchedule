package com.example.visoth.EmployeeSchedule.DAO;

import com.example.visoth.EmployeeSchedule.Entity.Schedule;
import com.example.visoth.EmployeeSchedule.Entity.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class SpecificUserDAOImpl implements SpecificUserDAO{

    @Autowired
    private EntityManager entityManager;

    @Override
    public User findByEmail(String s) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<User> query=currentSession.createQuery("from User where email=:pDate",User.class);
        query.setParameter("pDate",s);
        User user=null;
        try {
            user=query.getSingleResult();

        }catch (Exception e){
            user=null;
        }

        return user;
    }
}
