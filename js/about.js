$(document).ready(function(){
	
    // section fadeIn
	
	$(window).scroll(function(){
        
		var scrollTop=$(window).scrollTop();
        
		if (scrollTop>=400){
			$(".works").addClass("works-on");
		} else {
			$(".works").removeClass("works-on");
		}
		
		if (scrollTop>=1600){
			$(".about").addClass("about-on");
		} else {
			$(".about").removeClass("about-on");
		}
        
        if (scrollTop>=2000){
            pieAni( $(".pie").eq(0) );
            pieAni( $(".pie").eq(1) );
            pieAni( $(".pie").eq(2) );
            pieAni( $(".pie").eq(3) );
            pieAni( $(".pie").eq(4) );
        }
		
		if (scrollTop>=2350){
			$(".contact").addClass("contact-on");
		} else {
			$(".contact").removeClass("contact-on");
		}
		
	});
    
    function pieAni($pie) {
         
        var score = $pie.attr("score");
        var duration = score / 50;
        var deg = score * 3.6 ;

        $pie.addClass("rotate");
        $pie.find(".deg").css("transition-duration", duration+"s");
        $pie.find(".deg").css("transform", "rotate("+deg+"deg)");

        var $cover = $pie.find(".cover");

        setTimeout(function(){
            $cover.fadeOut(0);
        }, 1000);
        
        if ($cover.css("display") == "block")
            increase($pie, 1, 1, score);     
    }
    
    function increase($pie, start, next, end) {

        $pie.find(".score").text( next );
         
        var st = setTimeout(function(){
            if (next < end) {
                increase($pie, start, next+1, end);
            }
        }, 40  );  
    }
});
