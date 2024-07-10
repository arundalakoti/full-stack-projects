package com.java.jdbc.factory;

import com.java.jdbc.repository.EmployeeRepo;
import com.java.jdbc.repository.IEmployeeRepo;

public class EmployeeRepoFactory {
	private EmployeeRepoFactory() {
		
	}
	
	static IEmployeeRepo employee = null;
	
	public static IEmployeeRepo getEmployeeRepo() {
		if(employee == null) {
			employee = new EmployeeRepo();
		}
		
		return employee;
	}
}
