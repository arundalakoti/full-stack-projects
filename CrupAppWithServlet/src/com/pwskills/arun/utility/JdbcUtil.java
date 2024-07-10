package com.pwskills.arun.utility;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

import java.io.IOException;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public final class JdbcUtil {
	
	private JdbcUtil(){
		
	}

	private static DataSource dataSource = null;
	
	static {
		
		try {
			String fileInfo = "/CrupAppWithServlet/src/com/pwskills/arun/properties/hikaricp.properties";
				
			HikariConfig config = new HikariConfig(fileInfo);
			dataSource = new HikariDataSource(config);
			System.out.println(dataSource);
				

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
//	public static Connection getDbConnection() throws IOException, SQLException {	
//		return DriverManager.getConnection(properties.getProperty("url"),properties.getProperty("user"), properties.getProperty("password"));
//	}
	
	public static Connection getDbConnection() throws IOException, SQLException {	
		return dataSource.getConnection();
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
