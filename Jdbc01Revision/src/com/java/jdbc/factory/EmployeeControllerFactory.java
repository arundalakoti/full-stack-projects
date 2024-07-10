package com.java.jdbc.factory;

import com.java.jdbc.controller.EmployeeController;
import com.java.jdbc.controller.IEmployeeController;
import com.java.jdbc.service.EmployeeService;
import com.java.jdbc.service.IEmployeeService;

public class EmployeeControllerFactory {
	static EmployeeController emp = null;
	
	public static IEmployeeController GetEmployeeController() {
		if(emp == null) {
			emp = new EmployeeController();
		}
		
		return emp;
	}
	
}
