package com.java.jdbc.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;

import com.java.jdbc.dto.Employee;
import com.java.jdbc.factory.EmployeeRepoFactory;
import com.java.jdbc.repository.IEmployeeRepo;

public class EmployeeService implements IEmployeeService {
	
	IEmployeeRepo emp = EmployeeRepoFactory.getEmployeeRepo();
	
	public int insertRecord(Employee employee) throws SQLException, ParseException {
		return emp.insertRecord(employee);
	}
	
	public int deleteRecord(int empId) throws SQLException {	
		return emp.deleteRecord(empId);
	}
	
	public int updateRecord(int empId,String name) throws SQLException {	
		return emp.updateRecord(empId, name);
	}
	
	public ResultSet viewRecord() throws SQLException {	
		return emp.viewRecord();
	}
}
