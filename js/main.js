$(document).ready(function() {
   
	$('tr').click(function(event) {
		
        $('tr').not(this).removeClass('clicked');
		$(this).toggleClass('clicked'); 
		
		
    });
	
	/*Model or Pop-up Window Start*/
	  
  
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
	/*Model or Pop-up Window End*/
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
   