/*################ Back to top ##################
#################################################
#################################################*/
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});


/*################ Smooth scrolling ##################
######################################################
######################################################*/
$(document).ready(function(){
	$("a").on('click', function(event) {

	if (this.hash !=="") {
		if (this.href.indexOf(window.location.href) >= 0) {
			event.preventDefault();

			var hash = this.hash;
	  
			// 800 specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

			window.location.hash = hash;
			});
		}	
	}
  });
});


/*################ Countdown home page ##################
########################################################
########################################################*/
var countDownDate = new Date("Mar 25, 2018 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="counterxx"
    document.getElementById("counterDays").innerHTML = days;	
	document.getElementById("counterHours").innerHTML = hours;
    document.getElementById("counterMinutes").innerHTML = minutes;
	document.getElementById("counterSeconds").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// Function to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("NavigationBarSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("NavigationBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}