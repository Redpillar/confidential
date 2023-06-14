function fn_addLine(el){
	$(".sub_sblb_fold").css({"height":"auto"});
	if($(el).prev().val().trim() == "" || $("#layerName").val().trim() == ""){
		alert("내용을 입력하세요!");
	}else{
		var source = "<span class='box_keyword'>"+$("#layerName").val().trim() + " | " + $(el).prev().val().trim() +"<a href='javascript:;' onClick='fn_removeThis(this)' class='btn_close'></a></span>";
		$(".sub_wordBox").append(source);
		$(el).prev().val("");
		$("#layerName").val("")
	};
	$("#layerName").focus();
	//$(el).prev().focus();
	if($(".sub_conBox").length) fn_sub_conBox();
};

function fn_addLineKey(el){
	if(event.keyCode == 13) fn_addLine($(el).next());
};

function fn_addLine2(el){
	$(".sub_sblb_fold").css({"height":"auto"});
	if($("#layerName").val().trim() == ""){
		alert("내용을 입력하세요!");
	}else{
		var source = "<span class='box_keyword'>"+$("#layerName").val().trim() +"<a href='javascript:;' onClick='fn_removeThis(this)' class='btn_close'></a></span>";
		$(".sub_wordBox").append(source);
		$(el).prev().val("");
		$("#layerName").val("")
	};
	$("#layerName").focus();
	//$(el).prev().focus();
	if($(".sub_conBox").length) fn_sub_conBox();
};

function fn_addLineKey2(el){
	if(event.keyCode == 13) fn_addLine2($(el).next());
};

function fn_addLine3(el){
//	$(".sub_sblb_fold").css({"height":"auto"});
	var $target = $(el).prev();
	var data = $target.val().trim();
	if ($target.find("span.box_keyword").length >= 15) {
		alert("키워드는 최대 15개 까지 등록 가능합니다.");
		return false;
	}
	
	if (wordByteCheck(data) > 30) {
		alert("키워드는 최대 30Byte 까지 입력 가능합니다.");
		return false;
	}
	
	if ($("span.box_keyword[value="+data+"]").length != 0) {
		alert("중복된 키워드 입니다.");
		$target.val("");
		return;
	}
	if(data != ""){
		var source = '<span class="box_keyword ml0" value="'+data+'">'+data+'<a class="btn_close" onclick="fnRemoveThis(this)" href="javascript:;"></a></span>';
		$(".sub_wordBox:first").append(source);
		$target.val("");
	};
	$target.focus();
	if($(".sub_conBox").length) fn_sub_conBox();
};

function fn_addLineKey3(el){
	if(event.keyCode == 13) fn_addLine3($(el).next());
};

function wordByteCheck(word) {
	var codeByte = 0;
    for (var idx = 0; idx < word.length; idx++) {
        var oneChar = escape(word.charAt(idx));
        if ( oneChar.length == 1 ) {
            codeByte ++;
        } else if (oneChar.indexOf("%u") != -1) {
            codeByte += 2;
        } else if (oneChar.indexOf("%") != -1) {
            codeByte ++;
        }
    }
    return codeByte;
}

function fnRemoveThis(el) {
	$(el).parent().remove();
}

// - _ . + 허용
function characterCheck(el){
	//var RegExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;//정규식 구문
    var RegExp = /[ \{\}\[\]\/?,;:|\)*~`!^\┼<>@\#$%&\'\"\\\(\=]/gi;//정규식 구문
    var obj = $(el);
    if (RegExp.test(obj.val())) {
        obj.val(obj.val().substring(0, obj.val().length - 1));//특수문자를 지우는 구문
    }
};



function fn_addMatLine(el){
	$(".sub_sblb_fold").css({"height":"auto"});
	if($("#cb_parentProperty").text() == "" || $("#cb_childProperty").text() == "(select previous condition)"|| $("#cb_childProperty").text() == "" || $("#tx_searchCondMin").val().trim() == "" || $("#tx_searchCondMax").val().trim() == "" ){
		alert("내용을 입력하세요!");
	}else{
		
		var sP = "";
		$("#ui_parentProperty").find("li").each(function(){
			if ($(this).text() == $("#cb_parentProperty").text()) {
				sP = $(this).attr("attr-val");
			}
		});
		
		var sC = "";
		$("#ui_childProperty").find("li").each(function(){
			if ($(this).text() == $("#cb_childProperty").text()) {
				sC = $(this).attr("attr-val");
			}
		});
		
		var source = "<span class='box_keyword' attr-p-val='"+sP+"' attr-c-val='"+sC+"'>"+$("#cb_parentProperty").text() + " | " + $("#cb_childProperty").text() + " | " +$("#tx_searchCondMin").val().trim() + " | " + $("#tx_searchCondMax").val().trim() +"<a href='javascript:;' onClick='fn_removeThis(this)' class='btn_close'></a></span>";
		$(".sub_wordBox").append(source);
		$("#cb_parentProperty").text("");
		$("#ui_childProperty").empty();
		$("#ui_childProperty").append('<li onClick = "dsel_liClick(this)" attr-val="">(select previous condition)</li>');	
		$("#cb_childProperty").text("(select previous condition)");
		$("#tx_searchCondMin").val("");
		$("#tx_searchCondMax").val("");
	};
	$("#cb_parentProperty").focus();
	//$(el).prev().focus();
	if($(".sub_conBox").length) fn_sub_conBox();
};

