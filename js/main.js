$(document).ready(function()
{
	/*Date*/
	$("#rtp-cargo-year").text((new Date).getFullYear() );
	$(".klm-hdr-logo").click(function () { location.href('welcome.html')});
	/*Welcome Page*/
	$('#btn-gc').click(function () { $(this).addClass('grn'); location.href('index.html')});
	$('#btn-xps').click(function() { $(this).addClass('grn');location.href('index.html')});	
		
	/*Index Page*/
	/*Logout Model Window */
	$("#btn-logout").click(function (e) { $(this).addClass('grn'); $('#btn-cancel').removeClass('grn'); ShowDialog(true); e.preventDefault();  });/*Open Model Window*/
	$("#btn-ok").click(function (e) {$(this).addClass('grn');location.href('welcome.html')});/*redirect to welcome page*/
	$("#btn-cancel").click(function (e) {$('#btn-logout').removeClass('grn');  HideDialog(); e.preventDefault(); });/*hide model window*/
	
	
	$('#tile').click(function() { $(this).addClass('grn');location.href('ride.html')});
	
	$('#error').click(function (e) { HideDialog(); e.preventDefault();  });
	$('#btn-delivery').click(function() 
	{ 
		var colors = [];
		$('#layout-tile').find(':checkbox:checked').each(function(i){ colors[i] = $(this).val();  $('#'+$(this).val()).hide();  });
	    return false;
   });

	$('#btn-reload').click(function() {
    location.reload();
});

	
	$('#btn-reject').click(function() 
	{ 
		
		$(this).addClass('grn');location.href('index.html')}
	);
	
	$('#btn-verify').click(function() 
	{ 
		
		$(this).addClass('grn');location.href('delivery.html')}
	);
	
	
	$(".accordion-error-report").click(function (e)  { ShowDialogEr(false); e.preventDefault(); $(this).parent().addClass("strikeout");  });
	$(".web-btn-close").click(function (e) { HideDialog(); e.preventDefault();  });
	
	
	/*Select Single Row in the Accordoin*/
	$('.accordion-content-table td:nth-child(2)').click(function() 
	{ 
		 $(this).toggleClass("grn");
		 $(this).next().toggleClass("grn");
		
	});
	$('.accordion-content-table td:nth-child(3)').click(function() 
		{ 
		 $(this).toggleClass("grn");
		 $(this).prev().toggleClass("grn");
	});

	/*Accordion Start*/
	function close_accordion_section()
	{
		
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(100).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');
			
		if(jQuery('.accordion-section-title').is('.active')) 
		{
			close_accordion_section();
			jQuery(this).addClass('active');
			jQuery('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
		}else {
			
			close_accordion_section();
			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
			
		}

		e.preventDefault();
	});
	/*Accordion End*/
	
	
	/*Accordoin Select All*/
	
	
	$('#ride input[type="checkbox"]').click(function(){
            if($(this).is(":checked"))
			{
                val = $(this).val();
				
				if (val=="sec1")
				{
					$('#accordion-1 table').addClass('grn');
					$('#accordion-1 table td:first-child').css('background-color','#FFF');
				}
				
				else if (val=="sec2")
				{
					$('#accordion-2 table').addClass('grn');
					$('#accordion-2 table td:first-child').css('background-color','#FFF');
					
				}
				else if(val=="sec3")
				{
					$('#accordion-3 table').addClass('grn');
					$('#accordion-3 table td:first-child').css('background-color','#FFF');
					
				}
				
            }
            else if($(this).is(":not(:checked)"))
			{
                val = $(this).val();
				if (val=="sec1")
				{
					$('#accordion-1 table').removeClass('grn');
				}
				else if(val=="sec2")
				{
					$('#accordion-2 table').removeClass('grn');
					
				}
				else if(val=="sec3")
				{
					$('#accordion-3 table').removeClass('grn');
					
				}
            }
        });
});
/*Model Window Function*/
function ShowDialog(modal) 
{ 	$("#overlay").show(); $("#dialog").fadeIn(300); 
	if (modal) { $("#overlay").unbind("click");} 
	else { $("#overlay").click(function (e) { HideDialog();});}
}
function HideDialog() 
{ 
$("#overlay").hide(); $("#dialog").fadeOut(300); 
}
