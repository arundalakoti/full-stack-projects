package com.pwskills.arun_new;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import com.pwskills.arun.controller.IStudentController;
import com.pwskills.arun.dto.StudentVo;
import com.pwskills.arun.factory.StudentControllerFactory;

public class MainApp {
	
	public static void main(String []args) throws Exception {
		IStudentController controller = StudentControllerFactory.getStudentControllerObj();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		while (true) {
			System.out.println("*********WELCOMET TO STUDENT APPLICATION*****");
			System.out.println("1. INSERT");
			System.out.println("2. READ");
			System.out.println("3. UPDATE");
			System.out.println("4. DELETE");
			System.out.println("5. EXIT");
			System.out.print("ENTER YOUR CHOICE[1/2/3/4/5]:: ");
			String option = br.readLine();

			switch (option) {
			case "1":
				insertRecord(br, controller);
				break;
				
//			case "2":
//				readRecord(br, controller);
//				break;
//				
//			case "3":
//				updateRecord(br, controller);
//				break;
//				
//			case "4":
//				deleteRecord(br, controller);
//				break;
				
			case "5":
				System.out.println("***THANKS FOR USING THE APPLICATION****");
				System.exit(0);
				
			default:
				break;
			}
		}
		
		//sid will be auto generated, should not be taken from the users
	}
	
	private static void insertRecord(BufferedReader br, IStudentController controller) throws Exception {
		//sid will be auto generated, should not be taken from the users
		System.out.print("Enter the sname:: ");
		String sname = br.readLine();

		System.out.print("Enter the sage:: ");
		String sage = br.readLine();

		System.out.print("Enter the saddress:: ");
		String saddress = br.readLine();

		StudentVo stdVo = new StudentVo();
		stdVo.setSname(sname);
		stdVo.setSaddress(saddress);
		stdVo.setSage(sage);

		System.out.println("****SENDING VO TO CONTROLLER*****");
		String status = controller.insertRecord(stdVo);
		if (status.equalsIgnoreCase("success")) {
			System.out.println("Record inserted succesfully...");
		} else {
			System.out.println(status);
		}
	}
}
