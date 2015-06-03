$(document).ready(function()
{
		var findid= location.search.substring(1).split("?");
		if(findid=="id1")
		{
			$('#uld1').css('display','block');
		}
		else if(findid=="id1id2")
		{
			$('#uld1').css('display','block');
			$('#uld2').css('display','block');
		}
		else if(findid=="id1id2id3")
		{
			$('#uld1').css('display','block');
			$('#uld2').css('display','block');
			$('#uld3').css('display','block');
		}
		else if(findid=="id1id2id3id4")
		{
			$('#uld1').css('display','block');
			$('#uld2').css('display','block');
			$('#uld3').css('display','block');
			$('#uld4').css('display','block');
		}
		else if(findid=="id1id2id3id4id5")
		{
			$('#uld1').css('display','block');
			$('#uld2').css('display','block');
			$('#uld3').css('display','block');
			$('#uld4').css('display','block');
			$('#uld5').css('display','block');
		}
		
/*Date*/
	$("#rtp-cargo-year").text((new Date).getFullYear() );
	$(".klm-hdr-logo").click(function () { window.location.href = "welcome.html"});
	
	/*Welcome Page*/
	$('#btn-gc').click(function () { $(this).css('background-color', '#30b013'); window.location.href = "dir-in-index.html"});
	$('#btn-xps').click(function() { $(this).css('background-color', '#30b013'); window.location.href = "dir-in-index.html"});	
	
	/*dir -In Index Page*/
	$('#id1').click(function () 
	{ 
		
		$(this).css('background-color', '#30b013'); window.location.href = "dir-in-ride.html?id1";
	});
	$('#id2').click(function () 
	{ 
		
		$(this).css('background-color', '#30b013'); window.location.href = "dir-in-ride.html?id1id2";
	});
	$('#id3').click(function () 
	{ 
		
		$(this).css('background-color', '#30b013'); window.location.href = "dir-in-ride.html?id1id2id3";
	});
	$('#id4').click(function () 
	{ 
		
		$(this).css('background-color', '#30b013'); window.location.href = "dir-in-ride.html?id1id2id3id4";
	});
	$('#id5').click(function () 
	{ 
		
		$(this).css('background-color', '#30b013'); window.location.href = "dir-in-ride.html?id1id2id3id4id5";
	});
	$('#btn-confirm').click(function (e) 
	{
		var tabcountarr = [];
		$('#dir-in-layout').each(function()
		{
			var numOfVisibleRows = $('table').filter(function() { return $(this).css('display') !== 'none';}).length;
			tabcountarr.push(numOfVisibleRows);
		});
		if(tabcountarr == 5)
		{
			window.location.href = "dir-in-delivery.html";
		}
		else
		{
			$("#textcontent").text('Your Ride Less; Say OK to Confirm or CANCEL to add more ride ');
			$('#btn-cancel').attr('id','addride');
			ShowDialog(true); e.preventDefault();
			$('#addride').click(function() { window.location.href="dir-in-index.html"; });
			$("#btn-ok").click(function (e) { window.location.href="dir-in-delivery.html"; });
		}
	});
	
	
	$('#tuld').click(function() { $('#tuld-drop').toggleClass('tuld-drop');  $('#tuld-drop').children(":first").focus(); });
	/*Index Page*/
	$("#btn-logout").click(function (e) { $(this).css('background-color', '#30b013'); $('#btn-cancel').removeClass('grn'); ShowDialog(true); e.preventDefault();  });/*Open Model Window*/
	$("#btn-ok").click(function (e) {$(this).css('background-color', '#30b013'); window.location.href="welcome.html"});/*redirect to welcome page*/
	$("#btn-cancel").click(function (e) {$('#btn-logout').removeClass('grn');  HideDialog_s(); e.preventDefault(); });/*hide model window*/
	//$('#tile').click(function() { $(this).css('background-color', '#30b013');window.location.href = "ride.html";});/*Pick the ride from Tile*/
	$('#btn-done').click(function() { window.location.href="dir-out-index.html"; });
	$('#layout-tile_out').click(function() { window.location.href="dir-out-ride.html"; });
	
/*Ride Page*/
	
/*For ULD Selection & Select the Check Box If all the ULD's Selected /Look out the class - .accordion-error-report.grn{ background-color:#FFF!important;} Just overriding the Error report*/

	$(document).on('click', '.accordion-content-table tr td:nth-child(2), .accordion-content-table tr td:nth-child(3)', function () 
	{
		var grnclassfnd=$(this).attr('class');
		var ids = $(this).parent().closest('div').attr('id');
				
		if(grnclassfnd == "grn")
		{
			$(this).removeClass("grn");
			$(this).next().removeClass("grn");
			$(this).prev().removeClass("grn");
		}
		else
		{
			$(this).addClass("grn");
			$(this).next().addClass("grn");
			$(this).prev().addClass("grn");
		}
		enablechkbox(ids);
		
	});

	$('#btn-verify').click(function(e) 
	{ 
		$(this).css('background-color', '#30b013');window.location.href="dir-out-delivery.html";	
		
		
	});
	
	/*Delivery Page*/
	
	$('#btn-delivery').click(function() 
	{ 
		var colors = [];
		$('#layout-tile').find(':checkbox:checked').each(function(i){ colors[i] = $(this).val();  $('#'+$(this).val()).hide();  });
	    return false;
   });

	$('#btn-reload').click(function() {  location.reload();});/*Reload or Refresh Button*/
	$('#btn-reject').click(function() { $(this).css('background-color', '#30b013');location.href('index.html')});/*Reject Button*/
	

	
	
	$(".accordion-error-report").click(function (e)  { ShowDialogEr(true); e.preventDefault(); $(this).parent().addClass("strikeout");  });
	$(".web-btn-close").click(function (e) { HideDialog(); e.preventDefault();  });
	
	$("#btn-damaged-uld").click(function (e) { HideDialog(); e.preventDefault();  });
	
	
	/*Accordion Start*/
	function close_accordion_section()
	{
		
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(100).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
			
		if($('.accordion-section-title').is('.active')) 
		{
			close_accordion_section();
			$(this).addClass('active');
			$('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
		}else {
			
			close_accordion_section();
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
			
		}

		e.preventDefault();
	});
	/*Accordion End*/
	
	
	/*Accordion Select All*/
	
	
	$('#ride input[type="checkbox"]').click(function(){
            if($(this).is(":checked"))
			{
                val = $(this).val();
				
				if (val=="sec1")
				{
					$('#accordion-1 table').css('background-color', '#30b013');
					$('#accordion-1 table td:first-child').css('background-color','#FFF');
				}
				
				else if (val=="sec2")
				{
					$('#accordion-2 table').css('background-color', '#30b013');
					$('#accordion-2 table td:first-child').css('background-color','#FFF');
					
				}
				else if(val=="sec3")
				{
					$('#accordion-3 table').css('background-color', '#30b013');
					$('#accordion-3 table td:first-child').css('background-color','#FFF');
					
				}
				
            }
            else if($(this).is(":not(:checked)"))
			{
                val = $(this).val();
				if (val=="sec1")
				{
					$('#accordion-1 table').removeClass('grn');
					$('#accordion-1 table td').removeClass('grn');
				}
				else if(val=="sec2")
				{
					$('#accordion-2 table').removeClass('grn');
					$('#accordion-3 table td').removeClass('grn');
				}
				else if(val=="sec3")
				{
					$('#accordion-3 table').removeClass('grn');
					$('#accordion-3 table td').removeClass('grn');
				}
            }
        });
});
/*Model Window Function*/
function ShowDialog(modal) 
{ 	
	
	$("#overlay").show(); $("#dialog").fadeIn(300); 
	if (modal) { $("#overlay").unbind("click");} 
	else { $("#overlay").click(function (e) { HideDialog_s();});}
}
function HideDialog_s() 
{ 
	$("#overlay").hide(); $("#dialog").fadeOut(300); 
}



function ShowDialogEr(modal)  
{ 
		
		$("#overlay").show();   
		$("#dailog_error-report").fadeIn(300);
		
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

function HideDialog() { $("#overlay").hide(); $("#dailog_error-report").fadeOut(300);  } 
/*Enable & Disable Check Box Function*/
function enablechkbox(id)
{
	var curId = "#"+id;
	var rowCount = $(curId+' tr td:nth-child(2)').length;
	var arr = [];
	$(curId+' td').each(function(index) 
	{
				var a = $(this).attr('class');
				arr.push(a);		
	});
			
	if ($.inArray(undefined, arr) == -1 && $.inArray("", arr) == -1)
	{
				$("."+id).prop( "checked", true );
	}
	else{$("."+id).prop( "checked", false );}
}


