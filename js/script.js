$(document).ready(function(){
    var fold=0;     //0일때는 펼치고 1일때는 접자.
    
    
   $(window).on('scroll',function(){
		
		var nowScroll = $(this).scrollTop(); // 스크롤 현재 위치
		
        var menuPos = nowScroll;
       
       $('.menubar').css('top',menuPos+'px');
       
       
	});
    
    $('.folder').on('click',function(){
        
        
        
    });
    
    
    
    
});

//
//
//$(window).on('scroll',function(){
//		
//		var nowScroll = $(this).scrollTop(); // 스크롤 현재 위치
//		
//		var bg1Pos = -(nowScroll * 0.2);
//		var bg2Pos = -(nowScroll * 0.15);
//		var bg3Pos = -(nowScroll * 0.1);
//		var spin = nowScroll * 0.05;
//		var op = (1000 - nowScroll) * 0.001;
//		
//		$('.bg1').css('background-position','0px ' + bg1Pos + 'px');
//		$('.bg2').css('background-position','0px ' + bg2Pos + 'px');
//		$('.bg3').css('background-position','0px ' + bg3Pos + 'px');
//		
//		$('.box').css({
//			'transform' : 'rotate(-' + spin + 'deg)',
//			'opacity' : op // 0 ~ 1
//		});
//	});