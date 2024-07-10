package com.pwskills.arun.service;

import java.sql.SQLException;

import com.pwskills.arun.dto.Student;

public interface IStudentService {
	public int insertRecord(Student student) throws SQLException;

}
