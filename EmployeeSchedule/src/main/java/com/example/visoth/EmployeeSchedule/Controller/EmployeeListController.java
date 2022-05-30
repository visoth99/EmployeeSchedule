package com.example.visoth.EmployeeSchedule.Controller;

import com.example.visoth.EmployeeSchedule.Entity.User;
import com.example.visoth.EmployeeSchedule.Service.UserService;
import com.example.visoth.EmployeeSchedule.User.CrdUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class EmployeeListController {

    @Autowired
    private UserService userService;

    @GetMapping("/EditEmployeeList")
    public String Edit(Model model){

        model.addAttribute("crdUser",new CrdUser());

        return "employeeList";
    }
    @PostMapping("/processEmployee")
    public String processEmployee(@Valid @ModelAttribute("crdUser") CrdUser crdUser,
                      BindingResult bindingResult,
                      Model model
                      ){

        String url="employeeList";
        if(bindingResult.hasErrors()){
            return url;
        }

        String email=crdUser.getEmail();
        User exist=userService.findByEmail(email);

        if(exist!=null){
            model.addAttribute("registrationError","User email already exists");
            return url;
        }
        model.addAttribute("success","Done! You've finished the registration.");


        userService.updateOrSave(new User(crdUser.getFirstName().toUpperCase(),
                crdUser.getLastName().toUpperCase(),
                crdUser.getEmail(),
                crdUser.getPhoneNumber()
                ));
        model.addAttribute("crdUser",new CrdUser());
        return url;
    }
}
