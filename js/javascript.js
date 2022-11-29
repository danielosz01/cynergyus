// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {
$('#slideshow').cycle({
fx: 'fade',
pager: '#smallnav',
pause: 1,
speed: 800,
timeout: 2500
});
});


//******** Scroll to Top ***********
$(window).scroll(function() {
if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	$('#return-to-top').fadeIn(200);    // Fade in the arrow
} else {
	$('#return-to-top').fadeOut(200);   // Else fade out the arrow
}
});
$('#return-to-top').click(function() {      // When arrow is clicked
$('body,html').animate({
	scrollTop : 0                       // Scroll to top of body
}, 500);
});


//************** Side Div with Cynergy Links
    function toggle_visibility(id) {		
		var e
		var x = (id == 'link1') ? "link2":"link1";
		e = document.getElementById(id);
		

       if(e.style.display == 'block'){
          e.style.display = 'none';
		  document.getElementById(x).style.display = 'block';
       } else {
		  e.style.display = 'block';		   
          document.getElementById(x).style.display = 'none';
	   }
    }

