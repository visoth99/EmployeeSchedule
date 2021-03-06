package com.example.visoth.EmployeeSchedule.Entity;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="schedule")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="date")
    private String date;

    @Column(name="note")
    private String note;

    @OneToMany(
            mappedBy = "schedule",
            fetch = FetchType.LAZY,
            cascade = {CascadeType.ALL}
    )
    @JsonIgnore
    private Set<ScheduleUserTime> scheduleUserTimes;

    public Schedule() {
    }

    public Schedule(String date, String note) {
        this.date = date;
        this.note = note;
    }

    public void addScheduleUserTime(ScheduleUserTime scheduleUserTime){
        if(scheduleUserTimes==null){
            scheduleUserTimes=new HashSet<>();

        }
        scheduleUserTimes.add(scheduleUserTime);
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Set<ScheduleUserTime> getScheduleUserTimes() {
        return scheduleUserTimes;
    }

    public void setScheduleUserTimes(Set<ScheduleUserTime> scheduleUserTimes) {
        this.scheduleUserTimes = scheduleUserTimes;
    }
}
