package com.pwskills.arun;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.pwskills.utility.DbUtil;

public class ExecuteMethodApp {	
	public static void main(String[] args) {
			Connection connection = null;
			Statement statement = null;
			String sqlQuery = null;
			Boolean flag = null;
			ResultSet resultSet = null;
			
			int rowCount = 0;
			Scanner scanner = null;
			
			try {
				connection = DbUtil.getDbConnection();
				
				if(connection!=null)
					statement = connection.createStatement();
				
				scanner = new Scanner(System.in);
				
				if(scanner != null) {
					System.out.println("Enter the query:");
					sqlQuery =  scanner.nextLine();   //sqlQuery =  scanner.next(); -> this leads to error check once
					scanner.close();
				}
				
				
				if(statement!=null)
					flag = statement.execute(sqlQuery);
				
				if(flag) {
					resultSet = statement.getResultSet();
					while(resultSet.next())
						System.out.println(resultSet.getString(1) + "\t" + resultSet.getInt(2));
				}
				else {
					rowCount = statement.getUpdateCount();
					if(rowCount == 0) {
						System.out.println("Table not modified");
					}else {
						System.out.println("Table got modified");
					}
				}
					
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
				DbUtil.cleanUpResourses(null, connection, statement);
			}
	}
}