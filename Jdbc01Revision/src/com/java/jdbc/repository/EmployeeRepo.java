package com.java.jdbc.repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;

import com.java.jdbc.dto.Employee;
import com.java.jdbc.utility.JdbcUtil;

public class EmployeeRepo implements IEmployeeRepo {
	
	private static Connection connection = null;
	private static PreparedStatement preparedStatement = null;
	private static String sqlQuery = null;
	
	static {
		try {
			connection = JdbcUtil.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private static Date convertToSQLDate(String dob) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
		java.util.Date utilDate = sdf.parse(dob);
		long inputMs = utilDate.getTime();
		java.sql.Date sqlDate = new java.sql.Date(inputMs);
		return sqlDate;
	}
	
	//Retrieving date
//	private static String convertoString(Date date) {
//		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
//		return sdf.format(date);
//	}


	
	
	//WITH STATEMENT -> only done for insertRecord
//	@Override
//	public int insertRecord(Employee employee) throws SQLException {
//		
//		Statement statement = null;
//		String sqlInsertQuery = null;
//		
//		if(connection != null) {
//			statement = connection.createStatement();
//		}
//		
//		sqlInsertQuery = String.format("insert into employee_detail values(%d,'%s',%d,'%s')", employee.getEmpId(),employee.getName(),employee.getDateOfJoining());
//		sqlInsertQuery = String.format("insert into employee_detail values(%d,'%s')", employee.getEmpId(),employee.getName());
//		
//		if(sqlInsertQuery != null && statement != null) {
//			return statement.executeUpdate(sqlInsertQuery);
//		}
//		
//		return 0;
//	}
	
	//WITH PREPARED STATEMENT
	@Override
	public int insertRecord(Employee employee) throws SQLException, ParseException {
		sqlQuery = "insert into employee_detail (EmpId,name,dateOfJoining) values (?,?,?)";
		
		if(connection != null) {
			preparedStatement = connection.prepareStatement(sqlQuery);
		}
		
		if(sqlQuery != null && preparedStatement != null) {
			preparedStatement.setInt(1, employee.getEmpId());
			preparedStatement.setString(2, employee.getName());
			preparedStatement.setDate(3, convertToSQLDate(employee.getDateOfJoining()));
			
			return preparedStatement.executeUpdate();
		}
		
		return 0;
	}

	@Override
	public int deleteRecord(int empId) throws SQLException {
		sqlQuery = "delete from employee_detail where empId = ?";
		
		if(connection != null) {
			preparedStatement = connection.prepareStatement(sqlQuery);
		}
		
		if(sqlQuery != null && preparedStatement != null){
			preparedStatement.setInt(1,empId);
			
			return preparedStatement.executeUpdate();
		}
		
		return 0;
	}

	@Override
	public int updateRecord(int empId, String name) throws SQLException {
		sqlQuery = "update employee_detail set name = ? where empId = ?";
		
		if(connection != null) {
			preparedStatement = connection.prepareStatement(sqlQuery);
		}
		
		if(sqlQuery != null && preparedStatement != null) {
			preparedStatement.setString(1, name);
			preparedStatement.setInt(2, empId);
			
			
			return preparedStatement.executeUpdate();
		}
		
		return 0;
	}

	@Override
	public ResultSet viewRecord() throws SQLException {
		sqlQuery = "Select * from employee_detail";
		
		if(connection != null) {
			preparedStatement = connection.prepareStatement(sqlQuery);
		}
		
		if(sqlQuery != null && preparedStatement != null) {
			return preparedStatement.executeQuery();
		}
		
		return null;
	}
}
