$(document).ready(function() 
{
	$('.hdr-logo').click(function(e) { window.location.href = "index.html";});
	$('#home').click(function(e) {jQuery(this).addClass('hact'); window.location.href = "page3.html";});
	$('#btnR').click(function(e) { window.location.href = "index.html";});
	$('#btnV').click(function(e) { window.location.href = "page3.html";});
	$(".tab-er").click(function (e)  {  ShowDialogEr(false); e.preventDefault();  });
	$(".web_Hrht").click(function (e) { HideDialog(); e.preventDefault();  });
   
	
	
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
	
});

function ShowDialog(modal)  {   $("#overlay").show();   $("#dialog").fadeIn(300);

      if (modal) { $("#overlay").unbind("click");  }
      else { $("#overlay").click(function (e) { HideDialog(); });
      }
   }

   function HideDialog() { $("#overlay").hide(); $("#dialog").fadeOut(300);  } 
   
function ShowDialogEr(modal)  {   $("#overlay").show();   $("#dailogEr").fadeIn(300);

      if (modal) { $("#overlay").unbind("click");  }
      else { $("#overlay").click(function (e) { HideDialog(); });
      }
   }

   function HideDialog() { $("#overlay").hide(); $("#dailogEr").fadeOut(300);  } 