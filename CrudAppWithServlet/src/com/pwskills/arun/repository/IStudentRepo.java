package com.pwskills.arun.repository;

import java.sql.SQLException;

import com.pwskills.arun.dto.Student;

public interface IStudentRepo {
	public int insertRecord(Student student) throws SQLException;
}
