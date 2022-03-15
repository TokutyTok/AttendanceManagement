package app.admg.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import app.admg.Service.StampService;

@Controller
public class LoginController {

    @Autowired
    private StampService stampService;

    @GetMapping("/")
    public ModelAndView main() {

        ModelAndView mv = new ModelAndView();
        mv.setViewName("stamp");

        return mv;
    }
}