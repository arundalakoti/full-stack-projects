package com.pwskills.arun.factory;

import com.pwskills.arun.service.IStudentService;
import com.pwskills.arun.service.StudentServiceImpl;

public class StudentServiceFactory {
	private static IStudentService studentService = null;
	
	private StudentServiceFactory() {
		
	}
	
	public static IStudentService getStudentService() {
		if(studentService == null) {
			studentService = new StudentServiceImpl();
		}
		
		return studentService;
	}
}
