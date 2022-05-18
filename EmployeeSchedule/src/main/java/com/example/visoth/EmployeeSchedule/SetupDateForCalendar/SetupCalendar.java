package com.example.visoth.EmployeeSchedule.SetupDateForCalendar;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class SetupCalendar {

    private List<DateByWeek> dates;

    public SetupCalendar(int y,int m,int l) {

        dates=new ArrayList<>();
        DateByWeek dateByWeek=new DateByWeek();
        for(int j=1;j<=l;j++){
            Calendar s =Calendar.getInstance();
            s.set(y,m,j);
            int w=s.get(Calendar.DAY_OF_WEEK);
            if(s.get(Calendar.MONTH)==m)dateByWeek.addArr(w-1,j);
            if(w==7) {
                dates.add(dateByWeek);
                dateByWeek = new DateByWeek();
            }else if(j==l){
                dates.add(dateByWeek);
            }
        }
    }

    public List<DateByWeek> getDates() {
        return dates;
    }
}
