<%@ page import="java.sql.*, javax.sql.*, javax.naming.*" %>

<%
// Set Cache-Control to no-cache.
response.setHeader("Cache-Control", "no-cache");
// Prevent proxy caching.
response.setHeader("Pragma", "no-cache");
// Set expiration date to a date in the past.
response.setDateHeader("Expires", 946080000000L); //Approx Jan 1, 2000
// Force always modified.
//response.header("Last-Modified", new Date());
%>