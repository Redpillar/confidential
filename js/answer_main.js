$(document).ready(function(){
	var main_wrap = new ko({
		wrap:"s_wrap",
		type:"v", 
		sn:0, 
		paging:false, 
		pageDesign:false, 
		pWrapCss:{
			position:"absolute",
			top:"calc(50% - 111px)",
			right : "276px"
		},
		paginationsCss:{}, 
		pageNames:["ANSWER","SUPPORT"],
		wheelAc:true, 
		n:2
	});
	var main_img = new ko({
		type:"l",
		sn:0, 
		paging:false, 
		repeat:true, 
		loop:false, 
		delay:0, 
		loopDelay:8000,
		n : 1
	});
	var board_t1 = new ko({
		wrap:"mtsN1",
		type:"v",
		sn:0, 
		repeat2:true, 
		loop:true, 
		delay:0, 
		loopDelay:8000, 
		paging:false, 
		setNbtClass : "btNclassL",
		setPbtClass : "btPclassL",
		n:1.5
	});
	var board_t2 = new ko({
		wrap:"mtsN2",
		type:"v",
		sn:0, 
		repeat2:true, 
		loop:true, 
		delay:0, 
		loopDelay:8000, 
		paging:false,
		setNbtClass : "btNclassR",
		setPbtClass : "btPclassR",
		n:1.5
	});

	/*
	var main_img = new ko({
		wrap:"main2_rolling",
		type:"l",
		sn:0, 
		repeat:true, 
		loop:true, 
		pageAddClass : "exid",
		pageDesign : false,
		player : true,
		pWrapCss : {
			margin : "30px 0 0"
		},
		pageUlClass : {
			margin : "0 auto",
			textAlign : "center",
			fontSize : "0"
		},
		paginationsCss : {
			display : "inline-block",
			width : "9px",
			height : "9px",
			cursor : "pointer",
			border : "1px solid #4f5f6f",
			borderRadius : "100%"
		},
		delay:0, 
		loopDelay:8000,
		n:3
	});

	*/
	var arr = document.getElementsByClassName("downBtn")[0];
	var sw = true;
	arr.onclick = function(){
		/*
		var $page = document.getElementsByClassName(main_wrap.settings.pageClass)[0].children[0];
		$page.children[0].setAttribute("class","");
		$page.children[1].setAttribute("class","on");
		*/
		main_wrap._moveVertical({sw:"d",mPrice:-100});
	};
	/*
	if($(".main_subMain").length){
		$(".main_subMain > ul > li").hover(function(){
			var h = $(window).height();
			$(this).find(".main_subMainWrap").height(h);
		},function(){
			$(this).find(".main_subMainWrap").height("auto");
		});
	};
	*/
});