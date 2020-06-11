$(document).ready(function(){
	
    $(".works .works-next").click(function(){
        $(".works-slider .slider-inner").stop().animate({
            left: -1200
        });
        
        $(".works .works-next").fadeOut(200);
        $(".works .works-prev").fadeIn(200);
    });
    
    $(".works .works-prev").click(function(){
        $(".works-slider .slider-inner").stop().animate({
            left: 0
        });
        
        $(".works .works-prev").fadeOut(200);
        $(".works .works-next").fadeIn(200);
    });
    
	var pn=0;

	$(".thumb").click(function(){
		
		pn=$(this).index() + $(this).parent().index() * 6;
		
		$(".bg-wrap").fadeIn(400);
		$(".popup-slider").fadeIn(400);
		$("body").css("overflow", "hidden");
		
		checkNext();
		sliderAni();
		
		$(".popup-wrap").stop().animate({
			left: -1200*pn	
		});
	});
	
	function sliderAni (){
		$(".popup-wrap").stop().animate({
			left: -1*1200*pn,
			scrollTop: 0	
		});	
	}
	
	function checkNext(){
		if (pn==0){
			$(".popup-prev").fadeOut(100);
			$(".popup-next").fadeIn(100);	
		} else if (pn==11){
			$(".popup-next").fadeOut(100);
			$(".popup-prev").fadeIn(100);
		} else {
			$(".popup-prev").fadeIn(100);
			$(".popup-next").fadeIn(100);
		}
	}
	
	$(".close, .bg-wrap").click(function(){
		
		$(".bg-wrap").fadeOut(400);
		$(".popup-slider").fadeOut(0);
		$("body").css("overflow", "auto");
	});
	
	$(".popup-prev").click(function(){
			
		pn--;
		
		checkNext();
		sliderAni();
	});
	
	$(".popup-next").click(function(){		
		pn++;
		
		checkNext();
		sliderAni();
	});
		
});