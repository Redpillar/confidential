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

function getCounting(el){
    const _this = el;
    const num = _this.getAttribute("num");
    const delay = 10;
    const totalTime = 800;
    const one = totalTime / delay
    const numOne = num / one;
    let cuNum = 0;
    if(_this.timer) clearInterval(_this.timer);
    _this.timer = setInterval(()=>{
        cuNum += numOne;
        _this.innerText = String(Math.ceil(cuNum)).numberFormat();
        if(cuNum >= num){
            clearInterval(_this.timer);
            _this.timer = null;
            cuNum = num;
            _this.innerText = String(cuNum).numberFormat();
        }
    },delay)
}

function lnbMenuOpenFn(){
    const _this = event.currentTarget;
    const _bookmarkPop = document.querySelector("#bookmarkPop");
    const _gnb = document.querySelector("#gnb");
    const _gnbMenu = document.querySelector("#lnbMenuBox");
    const checked = _this.checked;
    if(checked){
        _bookmarkPop.classList.add("open");
        _gnbMenu.classList.remove("open");
    }else{
        _bookmarkPop.classList.remove("open");
    }

}
function menuChangedEv(){
    const _this = event.currentTarget;
    const _parent = _this.closest(".menuParent");
    const checked = _parent.classList.contains("open");
    if(checked){
        _parent.classList.remove("open");
    }else{
        _parent.classList.add("open");
    }
    switchCheckbox();
}
function gnbMenuMouseover(){
    const _this = event.currentTarget;
    const name = _this.getAttribute("menuname");
    const _name = document.querySelectorAll("[menuname="+name+"]");
    const _gnb = document.querySelector("#gnb");
    const _lnb = document.querySelector("#lnbMenuBox");
    const _bookmark = document.querySelector("#bookmarkPop");
    const _bookmarkInput = _gnb.querySelector("#icon");
    // _name.forEach((item,idx)=>{
    //     const _ul = item.closest("ul");
    //     const _li = item.closest("li");
    //     const _children = _ul.children;
    //     for(let i=0; i<_children.length; i++){
    //         const _c = _children[i];
    //         if(_c === _li){
    //             _c.classList.add("active");
    //             _bookmark.classList.remove("open");
    //             _bookmarkInput.checked = false;
    //         }else{
    //             _c.classList.remove("active");
    //         }
    //     }

    //     if(_c === _li){
    //         _c.classList.add("active");
    //         _bookmark.classList.remove("open");
    //         _bookmarkInput.checked = false;
    //     }else{
    //         _c.classList.remove("active");
    //     }
    // })
    // _lnb.classList.add("open");
    switchCheckbox();
    checkingBookmark();
    _lnb.classList.add("open");
    _bookmark.classList.remove("open");
    _bookmarkInput.checked = false;
}
function gnbmenuClose(){
    const _gnb = document.querySelector("#gnb");
    const _lnb = document.querySelector("#lnbMenuBox");
    _lnb.classList.remove("open");
}
function switchCheckbox(){
    const _menus = document.querySelectorAll(".lnbMenuListWrap li .lnbMenuList .menuParent");
    const _switch = document.querySelector("#menuFold");
    let switchChecked = true;
    for(let i=0; i<_menus.length; i++){
        const _m = _menus[i];
        const openCheck = _m.classList.contains("open");
        if(!openCheck){
            switchChecked = false;
            break;
        }
    }
    _switch.checked = switchChecked;
}
function menuFoldingFn(){
    const _this = event.currentTarget;
    const checked = _this.checked;
    const _menus = (checked)?document.querySelectorAll(".lnbMenuListWrap li .lnbMenuList .menuParent:not(.open)"):document.querySelectorAll(".lnbMenuListWrap li .lnbMenuList .menuParent.open");
    _menus.forEach((m,i)=>{
        m.classList.add("open");
        const _input = m.querySelector(".menu-switch input");
        if(checked){
            m.classList.add("open");
            _input.checked = false;
        }else{
            m.classList.remove("open");
            _input.checked = true;
        }
    })
}
function bookmarkSettingFn(){
    const _this = event.currentTarget;
    const _menus = document.querySelectorAll(".lnbMenuListWrap li .lnbMenuList .menuParent");
    const _menuWrap = document.querySelector(".lnbMenuListWrap li .lnbMenuList");
    const checked = _this.checked;
    _menus.forEach((item,i)=>{
        if(checked){
            // item.classList.add("bookmark");
        }else{
            // item.classList.remove("bookmark");
        }
    })
    if(checked){
        _menuWrap.classList.add("bookmark");
    }else{
        _menuWrap.classList.remove("bookmark");
    }
}
function checkingBookmark(){
    const _bookmark = document.querySelector("#bookmarkSet")
    const _menus = document.querySelectorAll(".lnbMenuListWrap li .lnbMenuList .menuParent");
    let checked = true;
    for(let i=0; i<_menus.length; i++){
        const item = _menus[i];
        const bookChecked =  item.classList.contains("bookmark");
        if(!bookChecked){
            checked = false;
            break;
        }
    }
    _bookmark.checked = checked;

}

function splitFn(){
    event.preventDefault();
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancleBubble = true;
    }
    const _this = event.currentTarget;
    const _box = document.querySelector("#bookmarkPop");
    const min = 200;
    const winMove = ()=>{
        const diff = event.pageX - _this.sx;
        const calc = (min >= _this.w + diff)?min:_this.w + diff;
        console.log("diff : ",diff);
        console.log("calc : ",calc);
        _box.style.width = calc + "px";
    }
    const winUp = ()=>{
        window.removeEventListener("mousemove",winMove);
        window.removeEventListener("mouseup",winUp);
    }
    _this.sx = event.pageX;
    _this.w = _box.clientWidth;
    console.log("event.pageX : ",event.pageX)
    console.log("_box.clientWidth : ",_box.clientWidth)
    window.addEventListener("mousemove",winMove);
    window.addEventListener("mouseup",winUp);
}

// init
function init(){
    const _count = document.querySelector("#mainCount");
    mainSlider();
    getCounting(_count);

    document.querySelectorAll(".menu-switch input").forEach((c,i)=>{
        const ev = document.createEvent("HTMLEvents");
        ev.initEvent("change",true,true);
        c.dispatchEvent(ev);
    })
}

window.onload = function(){
    init();
}