package com.pwskills.arun.utility;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Properties;

public final class JdbcUtil {
	
	private JdbcUtil(){
		
	}
	
	private static Properties properties = null;
	
	static {
		FileInputStream fis = null;
		
		try {
			fis = new FileInputStream("/Users/arun/Desktop/projects/full-stack-projects/CRUDAPP/src/com/pwskills/arun/properties/database.properties");
			if(fis != null) {
				properties = new Properties();
				properties.load(fis);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			if(fis != null)
				try {
					fis.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
		
	}
	
	public static Connection getDbConnection() throws IOException, SQLException {	
		return DriverManager.getConnection(properties.getProperty("url"),properties.getProperty("user"), properties.getProperty("password"));
	}
	
	public static void cleanUpResourses(ResultSet resultSet,Connection connection, Statement statement) {
		if(connection != null) {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		if(statement != null) {
			try {
				statement.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(resultSet != null) {
			try {
				resultSet.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
