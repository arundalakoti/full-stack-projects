package com.java.jdbc.factory;

import com.java.jdbc.service.EmployeeService;
import com.java.jdbc.service.IEmployeeService;

public class  EmployeeServiceFactory {
	
	public static IEmployeeService emp = null;
	
	public static IEmployeeService getEmployeeController(){
		if(emp == null) {
			emp = new EmployeeService();
		}
		
		return emp;
	}
	
	
}
