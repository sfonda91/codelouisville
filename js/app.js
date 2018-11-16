jQuery(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {

    // prevent opening of new page 
    e.preventDefault(); 

    // grab the src attr value (get the image to make it appear)
  var img_src = $(e.target).attr("src");

    // set src value for lightbox window
    var lightbox = 
    '<div id="lightbox">' +
      '<p>Click to close</p>' +
        '<img src="' + img_src + '">'
    '</div>';

    // append the lightbox window 

  //  if ($('#lightbox').length > 0) {
  //    //place href as img src value 
  //    $('#content').html('<img src="">'); 
  //    //show lightbox window 
  //    $('#lightbox').show(); 
  //  }
      
      // append the lightbox window (insert lightbox HTML into page) 
			$('body').append(lightbox);
  });

    //Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').remove();
  });

});



			
