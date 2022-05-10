package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.DAO.UserDAO;
import com.example.visoth.EmployeeSchedule.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;


    @Override
    public List<User> findALL() {
        return userDAO.findAll();
    }

    @Override
    public User findById(int id) {
        Optional<User> result=userDAO.findById(id);
        User user=null;
        if(result.isPresent()){
            user=result.get();
        }else {
            throw new RuntimeException("Did not find employee "+id);
        }
        return user;
    }

    @Override
    public void updateOrSave(User user) {
        userDAO.save(user);
    }

    @Override
    public void deleteById(int id) {
        userDAO.deleteById(id);
    }
}
