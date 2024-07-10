package com.pwskills.arun.repository;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.pwskills.arun.dto.StudentBo;
import com.pwskills.arun.utility.JdbcUtil;

public class StudentRepoImpl implements IStudentRepo {
	
	private static Connection connection = null;
	private static PreparedStatement insertPstmt = null;
	private static final String SQL_INSERT_QUERY = "insert into student (`sname`,`sage`,`saddress`,`status`) values (?,?,?,?)";
	
	
	static {
		try {
			connection = JdbcUtil.getDbConnection();
			if(connection != null)
				insertPstmt = connection.prepareStatement(SQL_INSERT_QUERY);
		} catch (IOException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public String insertRecord(StudentBo studentBo) {
		String status = "";
		if(insertPstmt!=null) {
			try {
				insertPstmt.setString(1, studentBo.getSname());
				insertPstmt.setInt(2, studentBo.getSage());
				insertPstmt.setString(3, studentBo.getSaddress());
				insertPstmt.setString(4, studentBo.getStatus());
				
				int rowCount = insertPstmt.executeUpdate();
				
				if(rowCount == 1) {
					status = "success";
				}else{
					status = "failure";
				}
			}catch(SQLException se) {
				int errorCode = se.getErrorCode();
				if (errorCode == 1064) {
					status = "some error in db operation";
				} else if (errorCode == 2006) {
					status = "connection lost at dbside";
				} else if (errorCode == 1045) {
					status = "acess denied for the user wrong credentialsm";
				} else if (errorCode == 1044) {
					status = "access denied for the user to database";
				} else {
					status = "Some Error at database side";
				}
				System.out.println(se);
			}catch(Exception se) {
				status = "Some Unknown Exception ";
				return status;
			}
			
		}
		
		return status;
	}

}
