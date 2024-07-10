package com.pwskills.arun.service;

import java.sql.SQLException;

import com.pwskills.arun.dto.Student;
import com.pwskills.arun.factory.StudentRepoFactory;
import com.pwskills.arun.repository.IStudentRepo;

public class StudentServiceImpl implements IStudentService {

	@Override
	public int insertRecord(Student student) throws SQLException {
		//abstraction
		IStudentRepo repo = StudentRepoFactory.getStudentRepo(); 
		
		return repo.insertRecord(student);
	}

}
