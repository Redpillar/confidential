function fn_map(src,html,sw){
	if(sw === true){
		$("#img01").removeAttr("id");
		var img = "<img src='"+src+"' style='cursor:pointer;' id='img01'/>";
		$(".sub_imgc li.lastBox .limgWrap").empty();
		$(".sub_imgc li.lastBox .limgWrap").append(img);
		$(".sub_imgc li.lastBox .limgWrap img").attr("onClick","javascript:fn_popimg(event)");
		$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step3");
		if($(".pageNationWrap > ul").children().length == 2){
			$(".pageNationWrap > ul").append("<li onClick='fn_setStep(this)'></li>");
		};
		$(".pageNationWrap > ul > li:eq(2)").addClass("on").siblings().removeClass("on");
	}else if(html === undefined){
		var img = "<img src='"+src+"' style='cursor:pointer;' id='img01'/>";
		$(".sub_imgc li.rightBox .limgWrap").empty();
		$(".sub_imgc li.rightBox .limgWrap").append(img);
		$(".sub_imgc li.rightBox .limgWrap img").attr("onClick","javascript:fn_popimg(event)");
		$(".sub_imgc li.lastBox .limgWrap img").remove();
	}else{
		var img = "<img src='"+src+"' />";
		$(".sub_imgc li.rightBox .limgWrap").empty();
		var ul = '<div class="line_areaWrap"><ul class="line_area">' + html + "</ul></div>";
		$(".sub_imgc li.rightBox .limgWrap").append(img).append(ul);
		$(".sub_imgc li.lastBox .limgWrap img").remove();
		$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step2");
		$(".pageNationWrap > ul > li:eq(1)").addClass("on").siblings().removeClass("on");
		if($(".pageNationWrap > ul").children().length == 1){
			$(".pageNationWrap > ul").append("<li onClick='fn_setStep(this)'></li>");
			$(".pageNationWrap > ul > li:eq(1)").addClass("on").siblings().removeClass("on");
		}else if($(".pageNationWrap > ul").children().length == 3){
			$(".pageNationWrap > ul > li:eq(2)").remove();
		};
	};
	if($(".sub_imgc li.rightBox .limgWrap img").width() > 500){
		$(".sub_imgc li.rightBox .limgWrap img").css({height:"auto",width:"500px"});
	};
	if($(".sub_imgc li.rightBox .limgWrap img").height() > 500){
		$(".sub_imgc li.rightBox .limgWrap img").css({"max-width":"none",height:"500px",width:"auto"});
	};
	
	if ($("#fileDiv").length > 0) {
		$("#fileDiv").show();
	}
	
	if ($("#colorList").length > 0) {
		$("#colorList").hide();
	}
};

function fn_map2(src){
	$("#img01").removeAttr("id");
	var img = "<img src='"+src+"' style='cursor:pointer;' id='img01'/>";
	$(".sub_imgc li.rightBox .limgWrap").empty();
	$(".sub_imgc li.rightBox .limgWrap").append(img);
	$(".sub_imgc li.rightBox .limgWrap img").attr("onClick","javascript:fn_popimg(event)");
	$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step2");
	if($(".pageNationWrap > ul").children().length == 1){
		$(".pageNationWrap > ul").append("<li onClick='fn_setStep(this)'></li>");
	};
	$(".pageNationWrap > ul > li:eq(1)").addClass("on").siblings().removeClass("on");
	
	if($(".sub_imgc li.rightBox .limgWrap img").width() > 500){
		$(".sub_imgc li.rightBox .limgWrap img").css({height:"auto",width:"500px"});
	};
	if($(".sub_imgc li.rightBox .limgWrap img").height() > 500){
		$(".sub_imgc li.rightBox .limgWrap img").css({"max-width":"none",height:"500px",width:"auto"});
	};
	
	if ($("#fileDiv").length > 0) {
		$("#fileDiv").hide();
	}
	
	if ($("#colorList").length > 0) {
		setTimeout( function() {
		$("#colorList").show();
		}, 700);
	}
};
function fn_popimg(event){
	var opwin = window.open("/caeweb/portal/service/mecha/tapImgpop.jsp","_blank");
	if($(event.target).parents(".rightBox").length){
		$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step2");
	}else{
		$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step3");
	};
};

function fn_popimg2(el){
	$("#img01").removeAttr("id");
	$(el).find("input").attr("id","img01");
	var opwin = window.open("/caeweb/portal/service/mecha/tapImgpop.jsp","_blank");
};

function fn_setStep(el){
	var ind = $(el).index();
	if($(el).hasClass("on")) return;
	if(ind == 0){
		if($(".sub_imgc.box3.ver2").hasClass("step2")){
			$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step1");
		}else{
			$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step1-1");
		};
		
		if ($("#fileDiv").length > 0) {
			$("#fileDiv").show();
		}
		
		if ($("#colorList").length > 0) {
			$("#colorList").hide();
		}
	}else if(ind == 1){
		if($(".sub_imgc.box3.ver2").hasClass("step1")){
			$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step2");
		}else{
			$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step2-1");
		};
		
		if ($("#fileDiv").length > 0) {
			$("#fileDiv").hide();
		}
		
		if ($("#colorList").length > 0) {
			setTimeout( function() {
			$("#colorList").show();
			}, 700);
		}
	}else if(ind == 2){
		$(".sub_imgc.box3.ver2").attr("class","sub_imgc box3 ver2 step3");
	};
	$(el).addClass("on").siblings().removeClass("on");
};

function fn_popimg3(url){
	$("#img01").removeAttr("id");
	$(el).attr("id","img01").attr("data-url",url);
	var opwin = window.open("/caeweb/portal/service/mecha/tapImgpop.jsp","_blank");
};

function fn_popimg4(target){
	imgId = $(target).attr("id");
	var opwin = window.open("/caeweb/portal/service/mecha/tapImgpop.jsp","_blank");
}