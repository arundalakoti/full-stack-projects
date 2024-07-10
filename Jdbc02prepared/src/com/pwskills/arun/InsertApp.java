package com.pwskills.arun;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.pwskills.utility.DbUtil;

public class InsertApp {
//	 private static final String SQL_INSERT_QUERY = "insert into batch values('satyam',50)";
	
	public static void main(String[] args) {
			Connection connection = null;
			Statement preparedStatement = null;
			
			private static final String SQL_INSERT_QUERY = "";
			
			int rowCount = 0;
			Scanner scanner = null;
			
			try {
				connection = DbUtil.getDbConnection();
				
				if(connection!=null)
					preparedStatement = connection.prepareStatement(SQL_INSERT_QUERY);
				
				scanner = new Scanner(System.in);
				
				String sqlInsertQuery=null;
				if(preparedStatement !=null && scanner != null) {
					System.out.println("Enter the name:");
					String name = scanner.next();
					
					System.out.println("Enter the Roll number:");
					int rollNo = scanner.nextInt();
					
					preparedStatement.setString(1,name);
					preparedStatement.setInt(1,rollNo);
					
					rowCount = preparedStatement.executeUpdate();
				}
				
				
				if(statement!=null)
					rowCount = statement.executeUpdate(sqlInsertQuery);
				if(rowCount == 0)
					System.out.println("Failure in insertion...");
				else
					System.out.println("Record inserted successfully...");
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
