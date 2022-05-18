package com.example.visoth.EmployeeSchedule.SetupDateForCalendar;

public class DateByWeek {


    private int[] arr;

    public DateByWeek() {
        arr=new int[7];
    }


    public void addArr(int w, int d){
        arr[w]=d;
    }

    public int[] getArr() {
        return arr;
    }

    public void setArr(int[] arr) {
        this.arr = arr;
    }
}
