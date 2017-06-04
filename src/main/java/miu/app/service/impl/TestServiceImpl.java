package miu.app.service.impl;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import miu.app.service.intf.TestService;

@Service
public class TestServiceImpl implements TestService {

	public String test() {
        return "Hello, World miu!";
    }

}
