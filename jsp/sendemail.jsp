<%@ include file="conn1.jsp"%> 
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>
<%@ page import="oracle.jdbc.driver.*" %>

<%
  /*String name =  "Lina";
  String cemail = "lina.elsaadi@cynergyus.com"; 
  String desc = "This is a test";
  String Message2 ="";

  String sendto = "lina.elsaadi@cynergyus.com";
  String bcc = "lina.elsaadi@cynergyus.com";*/
   

  Connection conn = null;
  CallableStatement st = null;

try {
  //out.println("test");
  
  DataSource ds   = null;
  Context context = new InitialContext();
  Context envCtx  = (Context) context.lookup("java:comp/env");
  ds =  (DataSource)envCtx.lookup("jdbc/cy");
  if (ds != null) { conn   = ds.getConnection();}

        String name = request.getParameter("name");
        String cemail = request.getParameter("email");
        String desc = request.getParameter("message");
        String Message2 ="";

        String sendto = "service@cynergyus.com";
        String bcc = "itsupport@cynergyus.com";

        String Message1 = "New Request created from cynergyus.com";

        Message2 = "<font style='font-family:Arial, Helvetica, sans-serif;font-size:13px;'>New Request created from Cynergy - Contact US:<br><br> <strong>Customer Name: </strong>"+name+"<br><strong>Customer Email Address: </strong>"+cemail+"<br><strong>Customer Message: </strong>"+desc+"<br><br>";


        st = conn.prepareCall("{ call p_send_email_portal(?,?,?,?,?,?)}");
        st.setString(1,sendto);
        st.setString(2,null);     
        st.setString(3,bcc);
        st.setString(4,cemail);  
        st.setString(5,Message1);
        st.setString(6,Message2);

        st.executeQuery();

        st.close();

    
}

catch(SQLException e) {
       out.println("SQLException: " + e.getMessage() + "<BR>");
       while((e = e.getNextException()) != null)
       out.println(e.getMessage() + "<BR>");
}
finally {
   //Clean up resources, close the connection.
    if (st != null) {
      try { st .close(); } catch (SQLException e) { ; }
      st = null;
    }   //Clean up resources, close the connection.
   
   if(conn != null) {
      try {
           conn.close();
      }
      catch (Exception ignored) {}
   }
}
%>


<script>	   	
confirm('the message was sent successfully');
document.location.href='../contact.html';
</script>