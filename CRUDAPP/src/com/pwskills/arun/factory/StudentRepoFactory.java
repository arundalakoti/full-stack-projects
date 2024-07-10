package com.pwskills.arun.factory;

import com.pwskills.arun.repository.IStudentRepo;
import com.pwskills.arun.repository.StudentRepoImpl;

public class StudentRepoFactory {
	
	private StudentRepoFactory() {
		
	}
	
	private static StudentRepoImpl studentRepo = null;

	public static IStudentRepo getStudentRepo() {
		//null -> only once object should be created
		if(studentRepo == null) {
			studentRepo = new StudentRepoImpl();
		}
		return studentRepo;
	}

}
