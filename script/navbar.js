$(document).ready( () => {

 	$("#toggler").click( ()=>{

 		$("#tabs, #search").toggle();
 		$("#search").removeClass('searchLeft');
 		$(".navbar").addClass('tabs1');

 	})


 $(window).resize(function(){

 	var width;
 	width=$(window).width();
 	if( width >= 745){
         $("#search").addClass('searchLeft');
         $(".navbar").removeClass('tabs1');
         $("#tabs").css("display","flex");
         $("#search").css("display","block");
 }
 else{
    $("#tabs").css("display","none");
    $("#search").css("display","none");
 }

    });


$("#dropdown").click( ()=>{

	$("#dropdownContent").toggle();

	});


$("#dropdown").click(function(e){
    e.stopPropagation();
});
$("#dropdownContent").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $("#dropdownContent").hide();
});


	});