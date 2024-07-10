package com.pwskills.arun;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.pwskills.utility.DbUtil;


public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//so that we can use them in finally block
		Connection connection = null;
		Statement statement = null;
		ResultSet resultSet = null;
		

		try {
			connection = DbUtil.getDbConnection();
			
			statement = connection.createStatement();
			
			String SqlSlectQuery = "Select name, rollNo from batch";
			resultSet = statement.executeQuery(SqlSlectQuery);
			
			
			System.out.println("\n" + "name" + "\t" + "rollNo");
			while(resultSet.next()) {
				String name = resultSet.getString(1);
				int rollNo = resultSet.getInt(2);
				System.out.println(name + "\t" + rollNo);
			}

			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
			DbUtil.cleanUpResourses(resultSet, connection, statement);
		}
	}

}
