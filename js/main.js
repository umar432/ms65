$(document).ready(function() {
   
	$('tr').click(function(event) {
		
        $('tr').not(this).removeClass('clicked');
		$(this).toggleClass('clicked'); 
		
		
    });
});