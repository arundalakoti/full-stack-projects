package com.java.jdbc.dto;

public class Employee {
	private int EmpId;
	private String name;
	private String dateOfJoining;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public int getEmpId() {
		return EmpId;
	}
	public void setEmpId(int empId) {
		EmpId = empId;
	}
	
	public String getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	
	@Override
	public String toString() {
		return "Employee [EmpId=" + EmpId + ", name=" + name + ", dateOfJoining=" + dateOfJoining + "]";
	}
}
