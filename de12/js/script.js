$(function(){
    
});

$(window).on('load',function(){

});

$(window).on('scroll',function(){

});

/*===========================================================*/
/*讖溯�邱ｨ  5-1-24 繧ｯ繝ｪ繝�け縺励◆繧牙�蠖｢閭梧勹縺梧僑螟ｧ�井ｸｭ螟ｮ縺九ｉ�� */
/*===========================================================*/

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

/*===========================================================*/
/*  繝壹�繧ｸ蜀��謖�ｮ壹�蝣ｴ謇縺ｫ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ*/
/*===========================================================*/

$('#g-nav a,#footer a').click(function () {

   var elmHash = $(this).attr('href'); //繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ縺ｮHTML繧ｿ繧ｰhref縺九ｉ縲√Μ繝ｳ繧ｯ縺輔ｌ縺ｦ縺�ｋ繧ｨ繝ｪ繧｢id縺ｮ蛟､繧貞叙蠕�
	$(elmHash).css("position","relative");//id縺ｮ荳企Κ縺ｮ霍晞屬繧貞叙蠕励☆繧九◆繧√↓1譎ら噪縺ｫsticky繧堤┌蜉ｹ縺ｫ縺吶ｋ
	var pos = $(elmHash).offset().top;	//id縺ｮ荳企Κ縺ｮ霍晞屬繧貞叙蠕�
	$(elmHash).css("position","sticky");//sticky繧呈怏蜉ｹ縺ｫ謌ｻ縺�
	$('body,html').animate({scrollTop: pos}, 500); //蜿門ｾ励＠縺滉ｽ咲ｽｮ縺ｫ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縲�500縺ｮ謨ｰ蛟､縺悟､ｧ縺阪￥縺ｪ繧九⊇縺ｩ繧�▲縺上ｊ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
	return false; 

});

/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″*/
/*===========================================================*/


// 蜍輔″縺ｮ縺阪▲縺九￠縺ｮ襍ｷ轤ｹ縺ｨ縺ｪ繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蜷榊燕繧貞ｮ夂ｾｩ
function fadeAnime(){
    
	// 4-7 縺ｫ繧��繧難ｼ域ｻ代ｉ縺九↓螟牙ｽ｢縺励※蜃ｺ迴ｾ��
	
	$('.smoothTrigger').each(function(){ //smoothTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
		var elemPos = $(this).offset().top-50;//隕∫ｴ�繧医ｊ縲�50px荳翫�
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smooth');// 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉsmooth縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
		}else{
		$(this).removeClass('smooth');// 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉsmooth縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
		}
		});	
}


/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 8-16 貊代ｉ縺九↓蜃ｺ迴ｾ*/
/*===========================================================*/

// smoothTrigger縺ｫsmoothTextAppear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倥￠繧句ｮ夂ｾｩ
function SmoothTextAnime() {
	$('.smoothTextTrigger').each(function(){ //smoothTextTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
		var elemPos = $(this).offset().top-50;//隕∫ｴ�繧医ｊ縲�50px荳翫�
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smoothTextAppear');// 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉsmoothTextAppear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
		}else{
		$(this).removeClass('smoothTextAppear');// 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉsmoothTextAppear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
		}
		});	
}

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 5-14 豕｢邱夲ｼ�1縺､��*/
/*===========================================================*/

var unit = 100,
    canvasList, // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ驟榊�
    info = {}, // 蜈ｨ繧ｭ繝｣繝ｳ繝舌せ蜈ｱ騾壹�謠冗判諠��ｱ
    colorList; // 蜷�く繝｣繝ｳ繝舌せ縺ｮ濶ｲ諠��ｱ

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    // canvas1蛟九ａ縺ｮ濶ｲ謖�ｮ�
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#fff', '#fff', '#fff', '#fff', '#fff']);//驥阪�繧区ｳ｢邱壹�濶ｲ險ｭ螳�
    
	
		// 蜷�く繝｣繝ｳ繝舌せ縺ｮ蛻晄悄蛹�
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvas縺ｮwidth繧偵え繧｣繝ｳ繝峨え縺ｮ蟷�↓蜷医ｏ縺帙ｋ
        canvas.height = 200;//豕｢縺ｮ鬮倥＆
        canvas.contextCache = canvas.getContext("2d");
    }
    // 蜈ｱ騾壹�譖ｴ譁ｰ蜃ｦ逅�他縺ｳ蜃ｺ縺�
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 蜷�く繝｣繝ｳ繝舌せ縺ｮ謠冗判
        draw(canvas, colorList[canvasIndex]);
    }
    // 蜈ｱ騾壹�謠冗判諠��ｱ縺ｮ譖ｴ譁ｰ
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 閾ｪ霄ｫ縺ｮ蜀崎ｵｷ蜻ｼ縺ｳ蜃ｺ縺�
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
		// 蟇ｾ雎｡縺ｮcanvas縺ｮ繧ｳ繝ｳ繝�く繧ｹ繝医ｒ蜿門ｾ�
    var context = canvas.contextCache;
    // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ謠冗判繧偵け繝ｪ繧｢
    context.clearRect(0, 0, canvas.width, canvas.height);

    //豕｢邱壹ｒ謠冗判 drawWave(canvas, color[謨ｰ蟄余, 騾城℃, 豕｢縺ｮ蟷��zoom,豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ )
    drawWave(canvas, color[0], 0.5, 3, 0);
	drawWave(canvas, color[1], 0.8, 4, 0);
	drawWave(canvas, color[2], 0.5, 1.6, 0);
	drawWave(canvas, color[3], 0.8, 3, 100);
	drawWave(canvas, color[4], 0.5, 1.6, 250);
}

/**
* 豕｢繧呈緒逕ｻ
* drawWave(濶ｲ, 荳埼乗�蠎ｦ, 豕｢縺ｮ蟷��zoom, 豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
	var context = canvas.contextCache;
    context.strokeStyle = color;//邱壹�濶ｲ
	context.lineWidth = 1;//邱壹�蟷�
    context.globalAlpha = alpha;
    context.beginPath(); //繝代せ縺ｮ髢句ｧ�
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.stroke(); //邱�
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(譎る俣, 豕｢縺ｮ蟷��zoom, 豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //譎る俣繧呈ｨｪ縺ｮ菴咲ｽｮ縺ｨ縺吶ｋ
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //繧ｹ繧ｿ繝ｼ繝井ｽ咲ｽｮ縺ｫ繝代せ繧堤ｽｮ縺�

    // Loop to draw segments (讓ｪ蟷��蛻�∵ｳ｢繧呈緒逕ｻ)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 5-17 邊貞ｭ舌′髮�∪縺｣縺ｦ繧ｿ繧､繝昴げ繝ｩ繝輔ぅ繝ｼ繧貞ｽ｢謌舌☆繧�*/
/*===========================================================*/

function particleTextAnime() {

$("#particle").particleText({
		text: "C o l o r . i n c", // 陦ｨ遉ｺ縺輔○縺溘＞繝�く繧ｹ繝医よ隼陦後�蝣ｴ蜷医�<br>霑ｽ蜉�
		colors:["#000"], // 繝代�繝�ぅ繧ｯ繝ｫ縺ｮ濶ｲ繧定､�焚謖�ｮ壼庄閭ｽ
		speed: "high",  // slow, middle, high 縺ｮ3縺､縺九ｉ邊貞ｭ舌′髮�∪繧矩溘＆繧帝∈謚�
	});
}

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 9-4-1 SVG 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
/*===========================================================*/

//SVG縺ｮ蛻晄悄險ｭ螳�

var logoVivus1;//1縺､繧√�SVG險ｭ螳�
var logoVivus2;//2縺､繧√�SVG險ｭ螳�
var logoVivus3;//3縺､繧√�SVG險ｭ螳�

//1��3縺ｮSVG蛻晄悄險ｭ螳�
function VivusInit(){
	//1縺､繧√�SVG蛻晄悄險ｭ螳�
	logoVivus1 = new Vivus('logo',
		{
			start: 'autostart',//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ閾ｪ蜍募�逕�
			type: 'scenario',// 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｿ繧､繝励ｒ險ｭ螳�
			pathTimingFunction: Vivus.EASE,//蜍輔″縺ｮ蜉�騾滓ｸ幃溯ｨｭ螳�
		},
		function(obj){
			$("#logo").attr("class", "done");//謠冗判縺檎ｵゅｏ縺｣縺溘ｉdone縺ｨ縺�≧繧ｯ繝ｩ繧ｹ繧定ｿｽ蜉�
		}
	);
	logoVivus1.stop();	
	
	//2縺､繧√�SVG蛻晄悄險ｭ螳�
	logoVivus2 = new Vivus('logo2',
		{
			start: 'autostart',//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ閾ｪ蜍募�逕�
			duration: 80 ,//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ譎る俣險ｭ螳壹よ焚蟄励′蟆上＆縺上↑繧九⊇縺ｩ騾溘＞
			type: 'scenario-sync',// 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｿ繧､繝励ｒ險ｭ螳�
			pathTimingFunction: Vivus.EASE_OUT,//蜍輔″縺ｮ蜉�騾滓ｸ幃溯ｨｭ螳�
		},
		function(obj){
			$("#logo2").attr("class", "done");//謠冗判縺檎ｵゅｏ縺｣縺溘ｉdone縺ｨ縺�≧繧ｯ繝ｩ繧ｹ繧定ｿｽ蜉�
		}
	);
	logoVivus2.stop();	
	
	//3縺､繧√�SVG蛻晄悄險ｭ螳�
	logoVivus3 = new Vivus('logo3',
		{
			start: 'autostart',//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ閾ｪ蜍募�逕�
			type: 'oneByOne',// 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｿ繧､繝励ｒ險ｭ螳�
			pathTimingFunction: Vivus.EASE,//蜍輔″縺ｮ蜉�騾滓ｸ幃溯ｨｭ螳�
		},
		function(obj){
			$("#logo3").attr("class", "done");//謠冗判縺檎ｵゅｏ縺｣縺溘ｉdone縺ｨ縺�≧繧ｯ繝ｩ繧ｹ繧定ｿｽ蜉�
		}
	);
	logoVivus3.stop();
	
}


//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉSVG縺悟�迴ｾ縺吶ｋ險ｭ螳�
function VivusAnime(){
	//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ1縺､繧√�SVG縺悟�迴ｾ縺吶ｋ險ｭ螳�
	var elemPos = $('#logo').offset().top - 50;//隕∫ｴ�繧医ｊ縲�50px荳翫�菴咲ｽｮ縺ｾ縺ｧ譚･縺溘ｉ蜃ｺ迴ｾ
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus1.play(1);//謠冗判縺輔ｌ繧矩溘＆縲よ焚縺悟､ｧ縺阪￥縺ｪ繧九⊇縺ｩ騾溘＞
	}
	
	//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ2縺､繧√�SVG縺悟�迴ｾ縺吶ｋ險ｭ螳�
	var elemPos = $('#logo2').offset().top - 50;//隕∫ｴ�繧医ｊ縲�50px荳翫�菴咲ｽｮ縺ｾ縺ｧ譚･縺溘ｉ蜃ｺ迴ｾ
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus2.play(4);//謠冗判縺輔ｌ繧矩溘＆縲よ焚縺悟､ｧ縺阪￥縺ｪ繧九⊇縺ｩ騾溘＞
	}
	
	//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ3縺､繧√�SVG縺悟�迴ｾ縺吶ｋ險ｭ螳�
	var elemPos = $('#logo3').offset().top - 50;//隕∫ｴ�繧医ｊ縲�50px荳翫�菴咲ｽｮ縺ｾ縺ｧ譚･縺溘ｉ蜃ｺ迴ｾ
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus3.play(2);//謠冗判縺輔ｌ繧矩溘＆縲よ焚縺悟､ｧ縺阪￥縺ｪ繧九⊇縺ｩ騾溘＞
	}
}


/*===========================================================*/
/* 髢｢謨ｰ繧偵∪縺ｨ繧√ｋ*/
/*===========================================================*/

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
    fadeAnime();//蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
	SmoothTextAnime();//蜊ｰ雎｡邱ｨ 8-16繝�く繧ｹ繝医′貊代ｉ縺九↓蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
	VivusAnime();//蜊ｰ雎｡邱ｨ 9-4-1 SVG 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ髢｢謨ｰ繧貞他縺ｶ
});// 縺薙％縺ｾ縺ｧ逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ

// 繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//繝ｭ繧ｴ繧�1.2遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医☆繧玖ｨ倩ｿｰ
	
    //=====縺薙％縺九ｉ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
    $("#splash").delay(1500).fadeOut('slow',function(){//繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医☆繧玖ｨ倩ｿｰ
        $('body').addClass('appear');//繝輔ぉ繝ｼ繝峨い繧ｦ繝亥ｾ恵ody縺ｫappear繧ｯ繝ｩ繧ｹ莉倅ｸ�
        VivusInit(); //蜊ｰ雎｡邱ｨ 9-4-1 SVG 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蛻晄悄險ｭ螳�
        VivusAnime();//蜊ｰ雎｡邱ｨ 9-4-1 SVG 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ髢｢謨ｰ繧貞他縺ｶ
    });
    //=====縺薙％縺ｾ縺ｧ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
    
   //=====縺薙％縺九ｉ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√◆縺��ｴ蜷医�
    $('.splashbg').on('animationend', function() {    
    fadeAnime();//蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
	SmoothTextAnime();//蜊ｰ雎｡邱ｨ 8-16繝�く繧ｹ繝医′貊代ｉ縺九↓蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
    particleTextAnime();//蜊ｰ雎｡邱ｨ 5-17邊貞ｭ舌′髮�∪縺｣縺ｦ繝�く繧ｹ繝医↓縺ｪ繧矩未謨ｰ繧貞他縺ｶ
    });
    //=====縺薙％縺ｾ縺ｧ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ    

});// 縺薙％縺ｾ縺ｧ繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ