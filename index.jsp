<%@ include file="jsp/conn1.jsp"%>
<%@ page import="java.sql.*" %>
<%@ page import="oracle.jdbc.driver.*" %>
<%
  Connection conn = null;
  ResultSet rset20 = null;
  CallableStatement stmt20 = null;
   
try {

  DataSource ds   = null;
  Context context = new InitialContext();
  Context envCtx  = (Context) context.lookup("java:comp/env");
  ds =  (DataSource)envCtx.lookup("jdbc/cy");
  if (ds != null) { conn   = ds.getConnection();}

	String title ="";
	String dept = "";
	String total = "";
	String bbid = "";
	String notice ="";
	String notice_test = "0"; 
	Clob clobv = null; 
	String fileData = "";   
   
	stmt20 = conn.prepareCall("{call PKG_EMPLOYEE_PORTAL.GET_NOTICE(?)}");
	stmt20.registerOutParameter(1, OracleTypes.CURSOR);
	stmt20.executeQuery();
	rset20 = (ResultSet) stmt20.getObject(1);
		
   	while (rset20.next()) {
   		total = rset20.getString("total");
    }

	Statement stmt = null;
	ResultSet rset = null;

	stmt = conn.createStatement();
	String StrSQL;
	StrSQL ="select bb_id,bb_desc,bb_for_test,bb_title,(select d_name from dept where d_id = bb_dept) as bb_dept from bulletin_board where ";
	//StrSQL = StrSQL + "CURRENT_TIMESTAMP AT TIME ZONE 'AMERICA/CHICAGO' between BB_NOTICE_DATE and BB_END_DATE "; 
    StrSQL = StrSQL + "SYSDATE between BB_NOTICE_DATE and BB_END_DATE "; 
	StrSQL = StrSQL + "and bb_type = 'A' "; 
    StrSQL = StrSQL + "and bb_for_test = '0' "; 
	//StrSQL = StrSQL + "and bb_for_test = '1' "; 
	StrSQL = StrSQL + "order by bb_date desc"; 
	//StrSQL = StrSQL + "order by bb_date desc fetch first 1 rows only"; 

	//out.println(StrSQL);

	rset = stmt.executeQuery(StrSQL);
  

	stmt20.close();
	stmt20 = null;

%>   
<!doctype html>
<html><!-- InstanceBegin template="/Templates/index.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
	<meta charset="utf-8">
	<!--------- icons ------------>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<!--------- icons ------------>	
	<!-- InstanceBeginEditable name="doctitle" -->
<title>CynergyUS | Home</title>
<!-- InstanceEndEditable -->
	<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->	
	<link href="css/main.css" rel="stylesheet" type="text/css" />
    <!-- <script type="text/javascript" src="js/jquery-1.6.3.min.js"></script> -->
    <script type="text/javascript" src="js/jquery-3.6.0.js"></script>
	<script type="text/javascript" src="js/jquery.cycle.all.js"></script>	
	<script type="text/javascript" src="js/javascript.js"></script>
	<link rel="icon" href="images/elogo2.ico" type = "image/x-icon"> 	
	<!-- InstanceBeginEditable name="CSS" -->
	<link href="css/notification2020/default.css" rel="stylesheet" type="text/css" />
	<link href="css/google.css" rel="stylesheet" type="text/css" />
	<link href="css/text-animation.css" rel="stylesheet" type="text/css" />
	<!-- InstanceEndEditable -->
	<a name="top"></a>
	<script>

	</script>
</head>
<body>
	<!-- InstanceBeginEditable name="Background" -->
	<div id="slideshow" style="widows:100%; height:auto;"> 
		<img src="images/home1.png" class="bgM"/> 
		<img src="images/home2.png" class="bgM"/> 
		<img src="images/home3.png" class="bgM"/> 
		<img src="images/home4.png" class="bgM"/> 
	</div> 
	<!-- InstanceEndEditable -->
	<div id="wrap">
		<div class="topnav" id="myTopnav">
		  <img width="230x" height="auto" onclick="window.location.href='http://www.cynergyus.com'" onmouseover="" style="cursor: pointer;padding-top: 10px;" class="image" src="images/cynergylogo1.png" />
	<!-- InstanceBeginEditable name="TopMenu" -->
		  <a href="index.jsp" class="active1">Home</a>
		  <a href="about.html">About</a>
		  <a href="services.html">Services</a>
		  <a href="software.html">Software</a>
		  <a href="videos.html">Videos</a>
		  <a href="contact.html">Contact</a>
	<!-- InstanceEndEditable -->			
		  <a href="https://www.linkedin.com/company/cynergyus/" target="_blank"><img src="images/linkedin.png" width="20px" height="auto"/></a>
	 	  <a href="https://www.youtube.com/channel/UC_QvKaR6V43Q573VTKAFKtg/videos" target="_blank"><img src="images/youtube.png" width="25px" height="auto"/></a>	
		  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
		   <span class="menu-trigger">MENU</span>
		   <i class="fa fa-bars"></i>
		  </a>
		</div>
	</div>			
	<!-- InstanceBeginEditable name="Body" -->
<!---------------------- Notification -------------------------->
<link rel="stylesheet" type="text/css" href="css/notification/demo.css" />
<link rel="stylesheet" type="text/css" href="css/notification/ns-default.css" />
<link rel="stylesheet" type="text/css" href="css/notification/ns-style-bar.css" />
<script src="js/notification/modernizr.custom.js"></script>	
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->	
<!---------------------- Notification -------------------------->

	<script src="js/notification/classie.js"></script>
	<script src="js/notification/notificationFx.js"></script>
		
	    <!--<script>
		(function() {
			/*var bttn = document.getElementById( 'notification-trigger' );

			// make sure..
			bttn.disabled = false;

			bttn.addEventListener( 'click', function() {
				// simulate loading (for demo purposes only)
				classie.add( bttn, 'active' );*/
				//setTimeout( function() {

					//classie.remove( bttn, 'active' );

					// create the notification
					var notification = new NotificationFx({
						message : '<span class="icon icon-megaphone"></span><div id="marquee2"><%=notice%></div>',
						layout : 'bar',
						effect : 'slidetop',
						type : 'notice', // notice, warning or error
						/*onClose : function() {
							bttn.disabled = false;
						}*/
					});

					// show the notification
					notification.show();

				//}, 1200 );
				// disable the button (for demo purposes only)
				//this.disabled = true;
			//} );
		})();
	    </script>-->
			
					<!--------------- Notification 2020 ------------------>						
	              <%if (!total.equals("0")) {%>					
					<script>window.location='#popup1';</script>						
					<!--<div class="box" style="z-index:1000;position:fixed;margin:0;top:10;left:5%;">
						
						<a class="button1" href="#popup1" style="text-decoration: none;">Click to Open the Announcement <i class='fas fa-bell'></i></a>
						<div id="outer">
							<div id="loop" style="padding-top:20px;font-size:1em;"><p id="content">You have <%=total%> new Announcement</p></div>
						</div>	
					</div>-->
					<div id="popup1" class="overlay" style="z-index:1000000000;">
						<div class="popup">
							
							<% while (rset.next()) {
								clobv = rset.getClob("bb_desc");
								long length = clobv.length();
								fileData = clobv.getSubString(1, (int) length);											   

								notice_test = rset.getString("bb_for_test");
								title = rset.getString("bb_title");
								dept = rset.getString("bb_dept");
							    bbid = rset.getString("bb_id");
							   

								if (fileData != "") {%>	

									<style>
										.clicker {
											outline:none;
											cursor:pointer;
											padding-top:30px;
											padding-left:30px;
											--text-decoration: underline;
											background:white;
											border: 0px;
s											}
										.clicker.focus {
											background: white;
											border: 0px;
										}
									</style>
									<script>
										function myFunction(y) {
										  var x = document.getElementById(y);
										  if (x.style.display === "none") {
											x.style.display = "block";
										  } else {
											x.style.display = "none";
										  }
										}
									</script>
									
									<!--<button class="clicker" onclick="myFunction('div<%=bbid%>')"><strong>Announcement From <%=dept%></strong> <%if (!total.equals("1")){%>(Click to open the Announcement please)<%}%></button><br>-->
									<a class="close1" href="#" style="z-index:1000000000">&times;</a>
									
									
									<div id="div<%=bbid%>" style="position:relative;margin:auto;text-align: center">
										<div style="text-align: left;padding-bottom: 10px;"><span style='font-family:Roboto; font-size:1.5em;color:#CB272A;'><%=title%></span></div>
										<div id="notice1" style="margin:auto;text-align:center;">
											<%
											   out.println(fileData);
											   //out.println("test");
											%>
										</div>
									</div>
									
							<% }}%>
								
						</div>
									
					</div>			
					<%}%>								
		

	<table id="tabletext">
		<tr>
			<td>
				<div id="text1">
				<div>Cynergy</div>
			  	<!--<font style="color:#4281eb;text-shadow: 1px 1px 1px #2b2b2c, 2px 2px 2px #ffffff; 3px 3px 5px #ffffff; 4px 4px 6px #ffffff; 5px 5px 7px #4281eb;">Cynergy </font>-->
				<p id="pfronttext">&nbsp;The industry leader of Electrical Devices, Warranty Services, Re-manufacturing and Repair</p>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div id="text2" style="animation-delay:1.5s;">
					<br><span class="homespan">Is a world-class, electronics service provider company specializing in</span><br>
					<span class="homespan">manufacturer warranty services and re-manufacturing/repair of </span><br>
					<span class="homespan">CDMA and GSM mobile phones, supporting devices and other ancillary devices.</span><br>
					<span>&nbsp;</span> 
				</div>

				<div id="text3" style="animation-delay:15s;">
					<br><span class="homespan">The Cynergy Quality Management system and employees emphasize, embrace and impact quality</span><br>
					<span class="homespan">in all areas of customer support.</span><br>
					<span>&nbsp;</span> 
				</div>

				<div id="text4" style="animation-delay:27s;">
					<br><span class="homespan">Cynergy has earned a well deserved, respected reputation from global cellular</span><br>
					<span class="homespan">manufacturers and carriers as a quality</span><br> 
					<span class="homespan">provider of repair services for electronic devices and handsets.</span><br><span>&nbsp;</span> 
				</div>

				<div id="text5" style="animation-delay:40s;">
				  <br><span class="homespan">Cynergy strives to provide the best possible value by being reliable and efficient through use</span><br>
				  <span class="homespan">of advanced technology and IT.</span><br>
				  <span>&nbsp;</span> 
				</div>	
			</td>
		</tr>
	</table>
	<!-- InstanceEndEditable -->
	<div style="padding-top:100px;"><img src="images/empty.gif" /></div>	
	<!-- InstanceBeginEditable name="footer" -->
	<!-- InstanceEndEditable -->
</body>
<!-- InstanceEnd --></html>
<%
   stmt.close();
   stmt = null;
   rset.close();
   rset=null;
   rset20.close();
   rset20=null;
   conn.close();
   conn=null;
}
catch(SQLException e) {
       out.println("SQLException: " + e.getMessage() + "<BR>");
       while((e = e.getNextException()) != null)
       out.println(e.getMessage() + "<BR>");
}finally {
   //Clean up resources, close the connection.
    if (rset20 != null) {
      try { rset20.close(); } catch (SQLException e) { ; }
      rset20 = null;
    }

    if (stmt20 != null) {
      try { stmt20 .close(); } catch (SQLException e) { ; }
      stmt20 = null;
    }   //Clean up resources, close the connection.
   if(conn != null) {
      try {
           conn.close();
      }
      catch (Exception ignored) {}
   }
}

%>