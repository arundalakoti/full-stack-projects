package in.pwskills.arun.controller;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet(description = "Working with GET and POST methods", urlPatterns = { "/test" }, loadOnStartup = 10)

public class FirstServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	static {
		System.out.println("Loading :: FirstServlet.class file is loading...");
	}

	public FirstServlet() {
		System.out.println("Instantiation :: FirstServlet Object created...");
	}

	@Override
	public void init() throws ServletException {
		System.out.println("Initialization :: init()-> Zero param...");
	}

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("FirstServlet.doGet()....");
		PrintWriter out = response.getWriter();
		out.println("RequestProcessing :: GET METHOD...");
		out.close();
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("FirstServlet.doPost()....");
		PrintWriter out = response.getWriter();
		out.println("RequestProcessing :: POST METHOD...");
		out.close();
	}

}
