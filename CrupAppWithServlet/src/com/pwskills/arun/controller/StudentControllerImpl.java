package com.pwskills.arun.controller;

import com.pwskills.arun.dto.StudentDto;
import com.pwskills.arun.dto.StudentVo;
import com.pwskills.arun.factory.StudentServiceFactory;
import com.pwskills.arun.service.IStudentService;

public class StudentControllerImpl implements IStudentController {

	@Override
	public String insertRecord(StudentVo student) {
		
		//Convert VO object into DTO and send it to service layer
		StudentDto studentDto = new StudentDto();
		studentDto.setSname(student.getSname());
		studentDto.setSaddress(student.getSaddress());
		studentDto.setSage(Integer.parseInt(student.getSage()));
		
		IStudentService service = StudentServiceFactory.getStudentService();
		
		return service.insertRecord(studentDto);
	}

}
