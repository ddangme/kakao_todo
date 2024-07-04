package com.kakao_todo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping
    public String todo() {
        return "/html/todo.html";
    }
}
