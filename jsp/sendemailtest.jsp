<%@ include file="../jsp/conn.jsp"%> 
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>
<%@ page import="oracle.jdbc.driver.*" %>

<%@page import="javax.mail.Session"%>                                                                                                       
<%@page import="javax.mail.Authenticator"%>                                                                                                 
<%@page import="javax.mail.PasswordAuthentication"%>                                                                                        
<%@page import="javax.mail.Message"%>                                                                                                       
<%@page import="javax.mail.internet.MimeMessage"%>                                                                                          
<%@page import="javax.mail.internet.InternetAddress"%>                                                                                      
<%@page import="javax.mail.Transport"%>                                                                                                     
<%@ page import = "java.net.*" %>
<%@ page import = "java.io.*" %>

<%
		String name =  "Lina";
        String lname =  "ElSaadi";
        String cemail = "linaelsaadi@gmail.com";
        String ccemail = "linaelsaadi@gmail.com";
        String desc = "This is a test";
		String Message2 ="";


        /*String name = request.getParameter("name");
        String lname = request.getParameter("lname");
        String email = request.getParameter("email");
        String cemail = request.getParameter("cemail");
        String desc = request.getParameter("desc");*/

	  Message2 = "<font style='font-family:Arial, Helvetica, sans-serif;font-size:13px;'>New Request created from Cynergy - Contact US:<br><br> <strong>Customer Name: </strong>"+name+"<br><strong>Customer Last Name: </strong>"+lname+"<br> <strong>Customer Email Address: </strong>"+cemail+"<br> <strong>Customer Confirmed Email Address: </strong>"+ccemail+"<br> <strong>Customer Message: </strong>"+desc+"<br><br>";


String smtpServer = null;                                                                                                                   
String smtpPort = null;

//final String authAddress = "";                                                                                
final String authAddress = "tsupport@cynergyhitech.com";
final String authPassword = "";

/*final String authAddress = "itsupport@cynergyhitech.com";                                                                                
final String authPassword = "gohitech123"; */
String subject = null;                                                                                                                      
String email = null;
String cc = null;
String cc1 = null;                                                                                                                        
String cc2 = null;                                                                                                                        
String cc3 = null;
String message = null;                                                                                                                      
//String send = request.getParameter("send");                                                                                                 
String siteName=request.getServerName();                                                                                                    
siteName=siteName.replaceAll("www.","");                                                                                                    

//smtpServer = "smtpout.secureserver.net";
smtpServer = "localhost";
smtpPort = "25";    
subject = "";       


email = "lina.elsaadi@cynergyhitech.com";
cc = "jin@cynergyhitech.com";
cc1 = "mkpark@cynergyhitech.com";



/*cc2 = "6825593125@tmomail.net";
cc3 = "mynameismanq@gmail.com";*/

Connection conntest = null;
Statement st1=null;

Properties props = new Properties();     
            props.put("mail.smtp.host", smtpServer);
            props.put("mail.smtp.port", smtpPort);   
            props.put("mail.smtp.auth", "true");         
                                                         
            // create some properties and get the default Session
            Session sessionMail = Session.getInstance(props, new Authenticator() {
                 public PasswordAuthentication getPasswordAuthentication() {     
                         return new PasswordAuthentication(authAddress, authPassword);
                 }                                                                   
                });                                                                  
                                                                                     
            sessionMail.setDebug(true);

            // create a message
            Message msg = new MimeMessage(sessionMail);

            // set the from and to address
            InternetAddress addressFrom = new InternetAddress(authAddress);
            msg.setFrom(addressFrom);

            InternetAddress[] addressTo = new InternetAddress[3];
            addressTo[0] = new InternetAddress(email);
            addressTo[1] = new InternetAddress(cc);
            addressTo[2] = new InternetAddress(cc1);

            msg.setRecipients(Message.RecipientType.TO, addressTo);


            // Optional : You can also set your custom headers in the Email if you Want
            msg.addHeader("site", siteName);

            // Setting the Subject and Content Type
            //msg.setSubject(subject);
			
			msg.setSubject("Cynergy - Contact US");
//	        msg.setContent(Message2, "text/plain");
			msg.setContent(Message2, "text/html");
            Transport.send(msg);



%>