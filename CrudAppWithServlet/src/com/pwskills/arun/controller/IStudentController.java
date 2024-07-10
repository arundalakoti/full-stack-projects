package com.pwskills.arun.controller;

import java.sql.SQLException;

import com.pwskills.arun.dto.Student;

public interface IStudentController {
	
	public int insertRecord(Student student) throws SQLException;
}
