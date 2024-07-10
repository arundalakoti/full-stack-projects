package com.pwskills.arun.service;

import com.pwskills.arun.dto.StudentBo;
import com.pwskills.arun.dto.StudentDto;
import com.pwskills.arun.factory.StudentRepoFactory;
import com.pwskills.arun.repository.IStudentRepo;

public class StudentServiceImpl implements IStudentService {

	@Override
	public String insertRecord(StudentDto studentDto) {
			
		//convert DTO to BO and send it to repository layer
		
		StudentBo studentBo = new StudentBo();
		studentBo.setSname(studentDto.getSname());
		studentBo.setSage(studentDto.getSage());
		studentBo.setSaddress(studentDto.getSaddress());
		
		//extra logic
		if(studentBo.getSage() >= 60) {
			studentBo.setStatus("Senior Citizens");
		}else {
			studentBo.setStatus("Working People");
		}
		
		//abstraction
		IStudentRepo repo = StudentRepoFactory.getStudentRepo(); 
		
		return repo.insertRecord(studentBo);
	}

}
