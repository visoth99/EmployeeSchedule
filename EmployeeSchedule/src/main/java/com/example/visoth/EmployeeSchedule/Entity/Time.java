package com.example.visoth.EmployeeSchedule.Entity;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="time")
public class Time {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="time_hour")
    private String timeHour;

    @OneToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH}
    )
    @JsonIgnore
    private Set<ScheduleUserTime> scheduleUserTimes;

    public Time() {
    }

    public Time(String timeHour) {
        this.timeHour = timeHour;
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

    public String getTimeHour() {
        return timeHour;
    }

    public void setTimeHour(String timeHour) {
        this.timeHour = timeHour;
    }

    public Set<ScheduleUserTime> getScheduleUserTimes() {
        return scheduleUserTimes;
    }


    public void setScheduleUserTimes(Set<ScheduleUserTime> scheduleUserTimes) {
        this.scheduleUserTimes = scheduleUserTimes;
    }
}
