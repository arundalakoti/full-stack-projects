package com.pwskills.arun.repository;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import com.pwskills.arun.dto.Student;
import com.pwskills.arun.utility.JdbcUtil;

public class StudentRepoImpl implements IStudentRepo {
	
	private static Connection connection = null;
	
	static {
		try {
			connection = JdbcUtil.getDbConnection();
		} catch (IOException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public int insertRecord(Student student) throws SQLException {
		
		Statement statement = null;
		String sqlInsertQuery = null;
		
		if(connection != null) {
			statement = connection.createStatement();
		}
		
//		Integer sid = student.getSid();
//		Integer sage = student.getSage();
//		String sname = student.getSname();
//		sname = "'" + sname + "'";
//		
//		String saddress = student.getSaddress();
//		saddress = "'" + saddress + "'";
		
		sqlInsertQuery = String.format("insert into student_detail values(%d,'%s',%d,'%s')", student.getSid(),student.getSname(),student.getSage(),student.getSaddress());
		
		if(statement != null && sqlInsertQuery != null) {
			return statement.executeUpdate(sqlInsertQuery);
		}
		
		return 0;
		
	}

}
