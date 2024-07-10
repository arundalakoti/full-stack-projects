package com.pwskills.arun.controller;

import java.sql.SQLException;

import com.pwskills.arun.dto.Student;
import com.pwskills.arun.factory.StudentServiceFactory;
import com.pwskills.arun.service.IStudentService;

public class StudentControllerImpl implements IStudentController {

	@Override
	public int insertRecord(Student student) throws SQLException {
		
		IStudentService service = StudentServiceFactory.getStudentService();
		
		return service.insertRecord(student);
	}

}
