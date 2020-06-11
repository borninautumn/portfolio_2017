//hambuger menu

$(document).ready(function(){
    
    $("svg circle").attr("cx", $(window).width() / 2 + 570);
    
    $(window).resize(function(){
        
        $("svg circle").attr("cx", $(window).width() / 2 + 570);
    });
    

	$(".hambuger").click(function(){
        
        
	
	//+drawer
		if ($(".hambuger .bar").eq(0).hasClass("slash")){
			//$(".bg-wrap").fadeOut(500);
			$("svg circle").attr("r", "30");
		} else {
			//$(".bg-wrap").fadeIn(500);
			$("svg circle").attr("r", "2500");
		}
		
		//$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();

	});
	
	function hambugerAni(){
		$(".hambuger .bar").eq(0).toggleClass("slash");
		$(".hambuger .bar").eq(1).toggleClass("hidden");
		$(".hambuger .bar").eq(2).toggleClass("backslash");
	}
	
	//autoscroll
	
	$(".dw-menu p").click(function(){
	
		var gt=$(this).attr("target");
		
		$("body").stop().animate({
			scrollTop: $("section."+gt).offset().top
		}, 1000);
		
		$(".bg-wrap").fadeOut(500);
		$("svg circle").attr("r", "30");

		//$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();
	});
	
	//btn-top
	
	$(".btn-top").click(function(){
		
		var gt=$(this).attr(".main");
		
		$("body").stop().animate({
			scrollTop: $("section.main").offset().top	
		}, 1000);

	});
	
});
