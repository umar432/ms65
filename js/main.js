$(document).ready(function() 
{
    $("#cont").click(function() 
	{
		
	window.location.href = "page2.html";	
	
	
	});
	 $("#page2").click(function() 
	{
		
	window.location.href = "page3.html";	
	
	
	});
	
	 $("#page3").click(function() 
	{
		
	window.location.href = "page4.html";	
	
	
	});
		 $("#page4").click(function() 
	{
		
	window.location.href = "page5.html";	
	
	
	});
	
		 $("#page5").click(function() 
	{
		
	window.location.href = "index.html";	
	
	
	});
	
	$("#btnShowSimple").click(function (e)
      {
         ShowDialog(false);
         e.preventDefault();
      });

      $("#btnShowModal").click(function (e)
      {
         ShowDialog(true);
         e.preventDefault();
      });

      $("#btnClose").click(function (e)
      {
         HideDialog();
         e.preventDefault();
      });

      $("#btnSubmit").click(function (e)
      {
         var brand = $("#brands input:radio:checked").val();
         $("#output").html("<b>Your favorite mobile brand: </b>" + brand);
         HideDialog();
         e.preventDefault();
      });
	
});

function ShowDialog(modal)
   {
      $("#overlay").show();
      $("#dialog").fadeIn(300);

      if (modal)
      {
         $("#overlay").unbind("click");
      }
      else
      {
         $("#overlay").click(function (e)
         {
            HideDialog();
         });
      }
   }

   function HideDialog()
   {
      $("#overlay").hide();
      $("#dialog").fadeOut(300);
   } 