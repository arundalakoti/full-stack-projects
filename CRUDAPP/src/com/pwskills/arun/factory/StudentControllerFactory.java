package com.pwskills.arun.factory;

import com.pwskills.arun.controller.IStudentController;
import com.pwskills.arun.controller.StudentControllerImpl;

public class StudentControllerFactory {
	private static IStudentController controller = null;
	
	public static IStudentController getStudentControllerObj() {
		if(controller == null) {
			controller = new StudentControllerImpl();
		}
		
		return controller;
	}
}
