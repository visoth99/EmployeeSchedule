package com.example.visoth.EmployeeSchedule.Service;

import com.example.visoth.EmployeeSchedule.Entity.User;

import java.util.List;

public interface UserService {

    public List<User> findALL();
    public User findById(int id);
    public void updateOrSave(User user);
    public void deleteById(int id);
    public User findByEmail(String s);
}
