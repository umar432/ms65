$(document).ready(function() 
{
	$('#gc').click(function(e) { $(this).addClass('grn');window.location.href = "index.html";});
	$('#eps').click(function(e) { window.location.href = "eps-index.html";});
	$('.hdr-logo').click(function(e) { window.location.href = "page5.html";});
	$('#home').click(function(e) {$(this).addClass('grn'); window.location.href = "gc-ride.html";});
	$('#home1').click(function(e) {$(this).addClass('grn');window.location.href = "eps-ride.html";});
	$('#btnR').click(function(e) { $(this).addClass('orn');window.location.href = "index.html";});
	$('#btnV').click(function(e) {$(this).addClass('grn'); window.location.href = "gc-de.html";});
	$('#btnV1').click(function(e) { $(this).addClass('grn');window.location.href = "eps-de.html";});
	$(".tab-er").click(function (e)  {  ShowDialogEr(false); e.preventDefault(); $(this).parent().addClass("strikeout");  });
	$(".web_Hrht").click(function (e) { HideDialog(); e.preventDefault();  });
	$("#n").click(function (e) { HideDialog(); e.preventDefault();  });
	$('.btnareacen').click(function() {
    location.reload();
});

	
	
	$("#btnShowSimple").click(function (e)  {  ShowDialog(false); e.preventDefault();  });
    $("#btnShowModal").click(function (e)  { ShowDialog(true);  e.preventDefault();   });
    $("#btnClose").click(function (e) { HideDialog(); e.preventDefault();  });
    $("#btnSubmit").click(function (e)
      {
         /*var brand = $("#brands input:radio:checked").val();
         $("#output").html("<b>Your favorite mobile brand: </b>" + brand);*/
		 window.location.href = "login.html";
         HideDialog();
         e.preventDefault();
      });
	  
	  
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
			
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
			
		}

		e.preventDefault();
	});
	
	
	$('#btnD').click(function() 
	{ 
		var colors = [];
		$('#mcon').find(':checkbox:checked').each(function(i){ colors[i] = $(this).val();  $('#'+$(this).val()).hide();  });
	    return false;
   });
   
	$('#ver input[type="checkbox"]').click(function(){
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

function ShowDialog(modal)  {   $("#overlay").show();   $("#dialog").fadeIn(300);

      if (modal) { $("#overlay").unbind("click");  }
      else { $("#overlay").click(function (e) { HideDialog(); });
      }
   }

   function HideDialog() { $("#overlay").hide(); $("#dialog").fadeOut(300);  } 
   
function ShowDialogEr(modal)  
{ 
		
		$("#overlay").show();   
		$("#dailogEr").fadeIn(300);
		
		if (modal) 
		{ 
			$("#overlay").unbind("click");  
		}
		else { $("#overlay").click(function (e) 
		{ 
			HideDialog(); 
		});
      }
   }

   function HideDialog() { $("#overlay").hide(); $("#dailogEr").fadeOut(300);  } 