package com.pwskills.arun;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.pwskills.utility.DbUtil;

public class DeleteApp {
	private static final String SQL_DELETE_QUERY = "delete from batch where rollNo = ?";
	
	public static void main(String[] args) {
			Connection connection = null;
			PreparedStatement preparedStatement = null;
			
			int rowCount = 0;
			Scanner scanner = null;
			
			try {
				connection = DbUtil.getDbConnection();
				
				if(connection!=null)
					preparedStatement = connection.prepareStatement(SQL_DELETE_QUERY);
				
				scanner = new Scanner(System.in);
				
				if(scanner != null && preparedStatement!=null) {					
					System.out.println("Enter the Roll number:");
					int rollNo = scanner.nextInt();
					preparedStatement.setInt(1,rollNo);
					
					System.out.println("No of rows deleted is:" + preparedStatement.executeUpdate());
					
					System.in.read();
					
					System.out.println("\nReusing the same prepared statment to run query with different input");
					
					System.out.println("Enter the Roll number:");
					rollNo = scanner.nextInt();
					preparedStatement.setInt(1,rollNo);
					
					System.out.println("No of rows deleted is:" + preparedStatement.executeUpdate());
					
					scanner.close();
					
				}
				
				
				if(preparedStatement!=null)
					rowCount = preparedStatement.executeUpdate(sqlDeleteQuery);
				if(rowCount == 0)
					System.out.println("Record not available for deletion...");
				else
					System.out.println("Record deleted successfully...");
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
