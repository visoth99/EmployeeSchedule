# EmployeeSchedule
Providing a web page that allows small business owners or local managers build schedules for their  workplace, built with Java, JavaScript, ThymeLeaf, HTML,BootStrap 5, and CSS.

## Project Status
This project is currently in development. Users can build schedules base on calendar, and also users need to register employees information.

## Project Screenshot(s)
![`](https://user-images.githubusercontent.com/73359451/170911014-efa7c9b3-92dd-4119-a40b-b7a0d657d870.png)
![2](https://user-images.githubusercontent.com/73359451/170911021-f23d4cd7-a314-4262-9efe-408422e72540.png)
![3](https://user-images.githubusercontent.com/73359451/170911022-c42022c6-4a6f-4050-86de-35eb0b5320d3.png)

## Installation and Setup Instructions
Clone down this reposority. You will need  MySQL, Tomcat or IntelliJ Ultimate, and JDK 13 or above. 

**** Set up Database: go to SQL script directory in the main project directory, log into MySQL then create tables and insert values into time table.
(don't forget to configure the database in the application.properties file)

**** Start Server: Use your IDE to build and run

**** To Visit App: localhost:8080/
     

## Reflection:
This was a free time built project that I build during my Spring Semester 2022. So, I can not estimate the time range to finish this project.
The pupose of this project is to help business oweners and local managers to build their schedule for workplace, especially to replace spreadsheet which this app provides clean GUI.
There are lots of challenging for this project such as dealing with the constraint of ER model between tables, taking care of the frontend design which it got messy to deal with layout and grid,
and passing values from Thymeleaf to JavaScript.
## Tech Stacks:
[Spring MVC](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html)

[Spring JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)

[Spring Hibernate](https://www.baeldung.com/hibernate-5-spring)

[MySQL](https://www.mysql.com/)

[ThymeLeaf](https://www.thymeleaf.org/)

[BootStrap 5.0.2](https://blog.getbootstrap.com/2021/06/22/bootstrap-5-0-2/)
