$(document).ready(function(){
	
	/*
	function adjust_body_offset() {
    $('.jumbotron').css('padding-top', $('.navbar-default').outerHeight(true) + 'px' );
}

$(window).resize(adjust_body_offset);

$(document).ready(adjust_body_offset);*/

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top//offset grabs the position of the element and top location , scrollTOP moves the html and body to that area
      }, 250, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$("#project1").hover(function(){
  alert($(this).width());
});
  
  
  
});