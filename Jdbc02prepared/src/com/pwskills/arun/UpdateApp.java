package com.pwskills.arun;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.pwskills.utility.DbUtil;

public class UpdateApp {
//	 private static final String SQL_INSERT_QUERY = "insert into batch values('satyam',50)";
	
	public static void main(String[] args) {
			Connection connection = null;
			Statement statement = null;
			
			int rowCount = 0;
			Scanner scanner = null;
			
			try {
				connection = DbUtil.getDbConnection();
				
				if(connection!=null)
					statement = connection.createStatement();
				
				scanner = new Scanner(System.in);
				
				String sqlUpdateQuery=null;
				if(scanner != null) {
					System.out.println("Enter the name:");
					String name = scanner.next();
					
					System.out.println("Enter the Roll number:");
					int rollNo = scanner.nextInt();
					
					sqlUpdateQuery = "update batch set name='"+name+"'where rollNo="+rollNo+"";
				}
				
				
				if(statement!=null)
					rowCount = statement.executeUpdate(sqlUpdateQuery);
				if(rowCount == 0)
					System.out.println("Failure not available for insertion...");
				else
					System.out.println("Record updated successfully...");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
				scanner.close();
				DbUtil.cleanUpResourses(null, connection, statement);
			}
	}
}
