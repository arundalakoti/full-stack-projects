package com.java.jdbc.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;

import com.java.jdbc.dto.Employee;

public interface IEmployeeService {
	public int insertRecord(Employee employee) throws SQLException, ParseException;
	public int deleteRecord(int empId) throws SQLException;
	public int updateRecord(int empId,String name) throws SQLException;
	public ResultSet viewRecord() throws SQLException;
}
