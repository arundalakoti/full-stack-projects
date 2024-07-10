package com.java.jdbc.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;

import com.java.jdbc.dto.Employee;
import com.java.jdbc.factory.EmployeeServiceFactory;
import com.java.jdbc.service.IEmployeeService;

public class EmployeeController implements IEmployeeController {
	
	private static IEmployeeService emp = EmployeeServiceFactory.getEmployeeController();

	@Override
	public int insertRecord(Employee employee) throws SQLException, ParseException {		
		return emp.insertRecord(employee);
		
	}
	
	@Override
	public int deleteRecord(int empId) throws SQLException {
		return emp.deleteRecord(empId);
	}
	
	@Override
	public int updateRecord(int empId,String name) throws SQLException {
		return emp.updateRecord(empId, name);
	}
	
	@Override
	public ResultSet viewRecord() throws SQLException {
		return emp.viewRecord();
	}

}
