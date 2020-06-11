$(document).ready(function(){

	$(".hambuger").click(function(){

	//+drawer
		if ($(".hambuger .bar").eq(0).hasClass("slash")){
			$(".bg-wrap").fadeOut(500);
		} else {
			$(".bg-wrap").fadeIn(500);
		}
		
		$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();

	});
	
	function hambugerAni(){
		$(".hambuger .bar").eq(0).toggleClass("slash");
		$(".hambuger .bar").eq(1).toggleClass("hidden");
		$(".hambuger .bar").eq(2).toggleClass("backslash");
	}
	
    //auto scroll
	$(".dmenu:first-child").click(function(){
         
        $("body, html").stop().animate({
            scrollTop: 0
        }, 1000);
		
		$(".bg-wrap").fadeOut(500);
		$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();
	});
    
    $(".dmenu:nth-child(2)").click(function(){
         
        $("body, html").stop().animate({
            scrollTop: 800
        }, 1000);
		
		$(".bg-wrap").fadeOut(500);
		$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();
	});
    
    $(".dmenu:nth-child(3)").click(function(){
         
        $("body, html").stop().animate({
            scrollTop: 2200
        }, 1000);
		
		$(".bg-wrap").fadeOut(500);
		$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();
	});
    
    $(".dmenu:nth-child(4)").click(function(){
         
        $("body, html").stop().animate({
            scrollTop: 3000
        }, 1000);
		
		$(".bg-wrap").fadeOut(500);
		$(".drawer").toggleClass("drawer-on");
		
		hambugerAni();
	});
    
	//btn-top
	$(".btn-top").click(function(){

		$("body, html").stop().animate({
			scrollTop: 0	
		}, 1000);

	});
	
});