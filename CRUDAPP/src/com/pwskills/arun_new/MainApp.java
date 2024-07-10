package com.pwskills.arun_new;

import java.sql.SQLException;
import java.util.Scanner;

import com.pwskills.arun.controller.IStudentController;
import com.pwskills.arun.dto.Student;
import com.pwskills.arun.factory.StudentControllerFactory;

public class MainApp {
	
	public static void main(String []args) {
		IStudentController controller = StudentControllerFactory.getStudentControllerObj();
		Scanner scanner = new Scanner(System.in);
		
		Student student = new Student();
		
		System.out.print("Enter the sid:");
		Integer sid = scanner.nextInt();
		
		System.out.print("Enter the sname:");
		String sname = scanner.next();
		
		System.out.print("Enter the sage:");
		Integer sage = scanner.nextInt();
		
		System.out.print("Enter the saddress:");
		String saddress = scanner.next();
		
		student.setSid(sid);
		student.setSname(sname);
		student.setSage(sage);
		student.setSaddress(saddress);
		
		try {
			System.out.println("No of records inserted is:" + controller.insertRecord(student));
		} catch (SQLException e) {
			System.out.println("Insertion failure");
		}
		scanner.close();
	}
}
