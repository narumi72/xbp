//========================================================
//讖溯�邱ｨ   4-1-6 謇区嶌縺埼｢ｨ繝ｭ繧ｴ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
//========================================================

//SVG繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ謠冗判
var stroke;
stroke = new Vivus('mask', {//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵☆繧紀D縺ｮ謖�ｮ�
    start:'manual',//閾ｪ蜍募�逕溘ｒ縺帙★繧ｹ繧ｿ繝ｼ繝医ｒ繝槭ル繝･繧｢繝ｫ縺ｫ
    type: 'scenario-sync',// 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｿ繧､繝励ｒ險ｭ螳�
    duration: 50,//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ譎る俣險ｭ螳壹よ焚蟄励′蟆上＆縺上↑繧九⊇縺ｩ騾溘＞
    forceRender: false,//繝代せ縺梧峩譁ｰ縺輔ｌ縺溷�ｴ蜷医↓蜀阪Ξ繝ｳ繝繝ｪ繝ｳ繧ｰ縺輔○縺ｪ縺�
    animTimingFunction:Vivus.EASE,//蜍輔″縺ｮ蜉�騾滓ｸ幃溯ｨｭ螳�
}
);

//========================================================
//讖溯�邱ｨ   5-1-20繧ｯ繝ｪ繝�け縺励◆繧牙�蠖｢閭梧勹縺梧僑螟ｧ�亥承荳翫°繧会ｼ�
//========================================================

$(".openbtn").click(function () {//繝懊ち繝ｳ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
	$(this).toggleClass('active');//繝懊ち繝ｳ閾ｪ霄ｫ縺ｫ active繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ弱＠
    $("#g-nav").toggleClass('panelactive');//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫpanelactive繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    $(".circle-bg").toggleClass('circleactive');//荳ｸ閭梧勹縺ｫcircleactive繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
});

$("#g-nav a").click(function () {//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繝ｪ繝ｳ繧ｯ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
    $(".openbtn").removeClass('active');//繝懊ち繝ｳ縺ｮ active繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ縺�
    $("#g-nav").removeClass('panelactive');//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮpanelactive繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
    $(".circle-bg").removeClass('circleactive');//荳ｸ閭梧勹縺ｮcircleactive繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
});

//========================================================
//讖溯�邱ｨ   9-6-3 繝ｪ繝ｳ繧ｯ繧偵け繝ｪ繝�け縺吶ｋ縺ｨ縲∬レ譎ｯ縺梧囓縺上↑繧雁虚逕ｻ繧�判蜒上ｄ繝�く繧ｹ繝医ｒ陦ｨ遉ｺ
//========================================================

//繝�く繧ｹ繝医ｒ蜷ｫ繧荳闊ｬ逧�↑繝｢繝ｼ繝繝ｫ
$(".btnripple2").modaal({
	overlay_close:true,//繝｢繝ｼ繝繝ｫ閭梧勹繧ｯ繝ｪ繝�け譎ゅ↓髢峨§繧九°
	before_open:function(){// 繝｢繝ｼ繝繝ｫ縺碁幕縺丞燕縺ｫ陦後≧蜍穂ｽ�
		$('html').css('overflow-y','hidden');/*邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧貞�縺輔↑縺�*/
	},
	after_close:function(){// 繝｢繝ｼ繝繝ｫ縺碁哩縺倥◆蠕後↓陦後≧蜍穂ｽ�
		$('html').css('overflow-y','scroll');/*邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧貞�縺�*/
	}
});

//========================================================
//  蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″
//========================================================

function fadeAnime(){
// 4-1 縺ｵ繧上▲�井ｸ翫°繧会ｼ�
$('.fadeDownTrigger').each(function(){ //fadeDownTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
		var elemPos = $(this).offset().top-50;//隕∫ｴ�繧医ｊ縲�50px荳翫�
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeDown');// 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeDown縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
		}else{
		$(this).removeClass('fadeDown');// 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeDown縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
		}
		});
}

//========================================================
//  蜊ｰ雎｡邱ｨ 8-5 繝�く繧ｹ繝医′豬√ｌ繧九ｈ縺�↓蜃ｺ迴ｾ�井ｸ九°繧我ｸ奇ｼ�
//========================================================

function slideAnime(){
	//====荳贋ｸ九↓蜍輔￥繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺九ｉ===

		$('.upAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//荳翫°繧我ｸ九∈陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
				//繝�く繧ｹ繝郁ｦ∫ｴ�繧呈検繧隕ｪ隕∫ｴ��井ｸ奇ｼ峨→繝�く繧ｹ繝郁ｦ∫ｴ�繧貞�菴咲ｽｮ縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
				$(this).addClass("slideAnimeUpDown"); //隕∫ｴ�繧剃ｸ頑棧螟悶↓遘ｻ蜍輔＠CSS繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ荳翫°繧牙�縺ｮ菴咲ｽｮ縺ｫ遘ｻ蜍�
				$(this).children(".upAnimeInner").addClass("slideAnimeDownUp");//蟄占ｦ∫ｴ�縺ｯ隕ｪ隕∫ｴ�縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫ蠖ｱ髻ｿ縺輔ｌ縺ｪ縺�ｈ縺�↓騾��謖�ｮ壹ｒ縺怜�縺ｮ菴咲ｽｮ繧偵く繝ｼ繝励☆繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
			}else{
				//荳翫°繧我ｸ九∈陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧貞叙繧企勁縺�
				$(this).removeClass("slideAnimeUpDown");
				$(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
				
			}
		});
		
		$('.downAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//荳九°繧我ｸ翫∈陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
				//繝�く繧ｹ繝郁ｦ∫ｴ�繧呈検繧隕ｪ隕∫ｴ��井ｸ具ｼ峨→繝�く繧ｹ繝郁ｦ∫ｴ�繧貞�菴咲ｽｮ縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
				$(this).addClass("slideAnimeDownUp");//隕∫ｴ�繧剃ｸ区棧螟悶↓遘ｻ蜍輔＠CSS繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ荳九°繧牙�縺ｮ菴咲ｽｮ縺ｫ遘ｻ蜍�
				$(this).children(".downAnimeInner").addClass("slideAnimeUpDown");//蟄占ｦ∫ｴ�縺ｯ隕ｪ隕∫ｴ�縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫ蠖ｱ髻ｿ縺輔ｌ縺ｪ縺�ｈ縺�↓騾��謖�ｮ壹ｒ縺怜�縺ｮ菴咲ｽｮ繧偵く繝ｼ繝励☆繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
			}else{
				//荳九°繧我ｸ翫∈陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧貞叙繧企勁縺�
				$(this).removeClass("slideAnimeDownUp");
				$(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
				
			}
		});
		//====荳贋ｸ九↓蜍輔￥繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺ｾ縺ｧ===
	}

//========================================================
// 髢｢謨ｰ繧偵∪縺ｨ繧√ｋ
//========================================================

$(window).on('load',function(){
    
    stroke.play();//蜊ｰ雎｡邱ｨ 9-4-2 SVG繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
    
	$("#splash_logo").delay(1500).fadeOut('slow');//繝ｭ繧ｴ繧�1.5遘抵ｼ�1500ms�牙ｾ�ｩ溘＠縺ｦ縺九ｉ繝輔ぉ繝ｼ繝峨い繧ｦ繝�

     //=====縺薙％縺九ｉ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ      
    $("#splash").delay(1500).fadeOut('slow',function(){//繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓荳玖ｨ倥ｒ螳溯｡�
       $('body').addClass('appear');/*讖溯�邱ｨ 4-2-8 閭梧勹濶ｲ縺悟�蠖｢縺ｫ邵ｮ蟆擾ｼ井ｸｭ螟ｮ縺ｸ�峨�髢｢謨ｰ繧貞他縺ｶ*/
	});
    //=====縺薙％縺ｾ縺ｧ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ

    //=====縺薙％縺九ｉ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ   
    $('.splashbg').on('animationend', function() {        
       fadeAnime();/* 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ*/
       slideAnime();/*蜊ｰ雎｡邱ｨ 8-5 繝�く繧ｹ繝医′豬√ｌ繧九ｈ縺�↓蜃ｺ迴ｾ�井ｸ九°繧我ｸ奇ｼ峨�髢｢謨ｰ繧貞他縺ｶ*/
    });  
    //=====縺薙％縺ｾ縺ｧ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
    
});