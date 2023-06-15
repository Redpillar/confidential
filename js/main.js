/*
    main javascript 
    var 0.1
*/

// main slider
function mainSlider(){
    let len = document.querySelectorAll(".main-visual-slider .slider li").length;
    document.querySelector(".main-visual-slider .slider ul").style.left = "0";
    len = (len > 9)?len:"0"+len;
    document.querySelector(".main-visual-both .num .to").innerText = len;
    document.querySelector(".main-visual-both .num .cu").innerText = "01";
    const _visualBtn = document.querySelectorAll(".main-visual-btn");
    _visualBtn.forEach((b,i)=>{
      b.addEventListener("click",function(){
        const _slider = document.querySelector(".main-visual-slider .slider > ul")
        const _this = event.currentTarget;
        const checked = _this.classList.contains("l");
        const currentPosition = (_slider.style.left === "")?0:Number(_slider.style.left.match(/\-?\d+/g));
        const max = (document.querySelectorAll(".main-visual-slider .slider li").length - 1) * -100;
        let variableNum = -100;
        if(checked) variableNum = 100;
        const calc = currentPosition + variableNum;
        const apply = (calc > 0)?max:(calc < max)?0:calc;
        console.log("checked : ",checked)
        console.log("currentPosition : ",currentPosition)
        console.log("calc : ",calc)
        console.log("apply : ",apply)
        const num = (Math.abs(apply) * 0.01) + 1;
        const applyNum = (num > 9)?num:"0"+num;
        _slider.style.left = apply + "%";
        document.querySelector(".main-visual-both .num .cu").innerText = applyNum;
      })
    })
}

// gnb notice

function gnbBellChanged(){
    const _this = event.currentTarget;
    const checked = _this.checked;
    const _pop = document.querySelector("#noticePop");
    if(checked){
        _pop.classList.add("open");
    }else{
        _pop.classList.remove("open");
    }
}
function gnbNoticeClose(){
    const _this = event.currentTarget;
    const _pop = document.querySelector("#noticePop");
    _pop.classList.remove("open");
    document.querySelector("#notice-bell").checked = false;
    
}



// init
function init(){
    mainSlider();
}

window.onload = function(){
    init();
}