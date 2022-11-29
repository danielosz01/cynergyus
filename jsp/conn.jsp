<%@ page import="java.sql.*, javax.sql.*, javax.naming.*" %>

<%
    DataSource        ds     = null;
    Connection        conn   = null;
//    ResultSet         result = null;
//    Statement         stmt   = null;
//    ResultSetMetaData rsmd   = null;

   
     //Class.forName("oracle.jdbc.OracleDriver");
     //conn = DriverManager.getConnection( "jdbc:oracle:thin:@10.0.40.10:1521:chtech", "hitech", "hitech");

     //Producition
   	  Context context = new InitialContext();
      Context envCtx = (Context) context.lookup("java:comp/env");
      ds =  (DataSource)envCtx.lookup("jdbc/cy");
      if (ds != null) {
        conn   = ds.getConnection();
      }


/*Connection conn = null;
Class.forName("oracle.jdbc.driver.OracleDriver");
conn = DriverManager.getConnection( "jdbc:oracle:thin:@10.0.1.134:1521:chtech", "hitech", "hitech");*/

//Developer   
/*conn = DriverManager.getConnection( "jdbc:oracle:thin:@10.0.40.10:1521:chtech", "hitech", "hitech");*/
   

// Set Cache-Control to no-cache.
response.setHeader("Cache-Control", "no-cache");
// Prevent proxy caching.
response.setHeader("Pragma", "no-cache");
// Set expiration date to a date in the past.
response.setDateHeader("Expires", 946080000000L); //Approx Jan 1, 2000
// Force always modified.
//response.header("Last-Modified", new Date());

%>
