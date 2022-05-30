package com.example.visoth.EmployeeSchedule.Entity;

import javax.persistence.*;

@Entity
@Table(name="schedule_user_time")
public class ScheduleUserTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="schedule_id")
    private Schedule schedule;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="from_id")
    private Time to;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="to_id")
    private Time from;

    public ScheduleUserTime() {
    }

    public ScheduleUserTime(Schedule schedule, User user, Time to, Time from) {
        this.schedule = schedule;
        this.user = user;
        this.to = to;
        this.from = from;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Time getTo() {
        return to;
    }

    public void setTo(Time to) {
        this.to = to;
    }

    public Time getFrom() {
        return from;
    }

    public void setFrom(Time from) {
        this.from = from;
    }
}
