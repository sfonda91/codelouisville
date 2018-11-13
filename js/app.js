jQuery(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
	
    // prevent opening of new page 
    e.preventDefault(); 

    //get the image 
    var img_src = $(this).attr("src");
    
   if ($('#lightbox').length > 0) {
     //place href as img src value 
     $('#content').html('<img src="'); 
     //show lightbox window 
     $('#lightbox').show(); 
   }

   else { //create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + 
					'<img src=""/>' +
				'</div>' +	
      '</div>';
      
      //insert lightbox HTML into page
			$('body').append(lightbox);
   }
  });

      //Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});

});



			
