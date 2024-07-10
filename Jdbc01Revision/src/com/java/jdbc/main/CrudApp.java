package com.java.jdbc.main;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Scanner;

import com.java.jdbc.controller.IEmployeeController;
import com.java.jdbc.dto.Employee;
import com.java.jdbc.factory.EmployeeControllerFactory;

public class CrudApp {

	public static void main(String[] args) {
		
		Employee employee = new Employee();
		Integer sid = null;
		String name = null;
		
		Scanner scanner = new Scanner(System.in);
		IEmployeeController controller = EmployeeControllerFactory.GetEmployeeController();
		
//		//INSETRT
//		System.out.println("Enter sid");
//		sid = scanner.nextInt();
//		
//		System.out.println("Enter name");
//		String name = scanner.next();
//		
//		System.out.println("Enter date(dd-mm-yyyy)");
//		String date = scanner.next();
//		
//		employee.setEmpId(sid);
//		employee.setName(name);
//		employee.setDateOfJoining(date);
		
		//DELETE
//		System.out.println("Enter sid");
//		sid = scanner.nextInt();
//		
//		try {
//			System.out.println(controller.deleteRecord(sid));
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		//UPDATE
//		System.out.println("Enter sid");
//		sid = scanner.nextInt();
//		
//		System.out.println("Enter updated name");
//		name = scanner.next();
//		
//		try {
//			System.out.println(controller.updateRecord(sid, name));
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		//VIEW
		try {
			ResultSet resultSet = controller.viewRecord();
			
			while(resultSet.next()) {
				System.out.println("EmpId \t Name \t Date of joining \n");
				System.out.println(resultSet.getInt(1) + "\t" + resultSet.getString(2) + "\t" + resultSet.getDate(3));
				System.out.println("\n");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		scanner.close();
		
//		try {
//			controller.insertRecord(employee);
//		} catch (SQLException | ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

	}

}
