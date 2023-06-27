/*
    main javascript 
    var 0.1
*/

// main slider
function eventMainSlider(){
    const _slider = document.querySelector(".main-visual-slider");
    const _countBox = _slider.querySelector(".main-visual-both .num");
    const _visualBtn = _slider.querySelectorAll(".main-visual-btn");
    _visualBtn.forEach((b,i)=>{
      b.addEventListener("click",function(){
        if(_slider.movePoint !== -1){
            return 
        }
        const _this = event.currentTarget;
        const checked =  _this.classList.contains("r");
        let idx = (checked)?Number(_countBox.querySelector(".cu").innerText) + 1:Number(_countBox.querySelector(".cu").innerText) - 1;
        clearInterval(_slider.autotimer);
        idx = (idx < 1)?_slider.box.children.length:(idx > _slider.box.children.length)?1:idx;
        _slider.movePoint = (checked)?-100:0;
        _slider.count ++;
        if(!checked){
            _slider.box.insertBefore(_slider.box.children[_slider.box.children.length - 1],_slider.box.children[0]);
            _slider.box.style.left = "-100%";
        }
        _slider.currentLeft = (_slider.box.style.left === "")?0:Number(_slider.box.style.left.match(/\-?\d+\.\d+|\-?\d+/g)[0]);
        const varNum = (!checked)?1:-1;
        _slider.stopOne = (100 / _slider.frameLen) * varNum;

        if(_slider.timer) clearInterval(_slider.timer);
        _slider.timer = setInterval(()=>{
            _slider.currentLeft += Number(_slider.stopOne);


            if((_slider.movePoint >= _slider.currentLeft && checked) || (_slider.movePoint <= _slider.currentLeft && !checked)) _slider.currentLeft = _slider.movePoint;
            _slider.box.style.left = _slider.currentLeft + "%"
            if((_slider.movePoint >= _slider.currentLeft && checked) || (_slider.movePoint <= _slider.currentLeft && !checked)){
                clearInterval(_slider.timer);
                if(checked){
                    _slider.box.appendChild(_slider.box.children[0]);
                    _slider.box.style.left = "0";
                }
                _countBox.querySelector(".cu").innerText = (Number(idx) > 9)?idx:"0"+idx;
                _slider.movePoint = -1;
                mainSliderAuto();
            }
        },_slider.frame)
      })
    })
}
function settingMainSlider(){
    const _slider = document.querySelector(".main-visual-slider");
    const _countBox = _slider.querySelector(".main-visual-both .num");
    _slider.source = [];
    _slider.box = _slider.querySelector(".slider > ul");
    const _li = _slider.querySelectorAll(".slider > ul > li");
    _slider.time = 500;
    _slider.frame = 10;
    _slider.frameLen = _slider.time / _slider.frame;
    _slider.startLeft = -1;                                // 슬라이드 시 이동해야 할 값
    _slider.targetLeft = -1;                                // 슬라이드 시 이동해야 할 값
    _slider.movePoint = -1;                                // 클릭 시 뱡향을 알려주는 값
    _slider.agoMovePoint = -1;                                // 이전 클릭의 뱡향을 알려주는 값
    _slider.saveMovePint = 0;                            // 같은 방향으로 클릭 시 계속 쌓이는 값
    _slider.startNum = 1;
    _slider.count = 0;
    _li.forEach((_l,i)=>{
        const s = _l.innerHTML;
        _slider.source.push(s);
    })
    _countBox.querySelector(".to").innerText = (_li.length > 9)?_li.length:"0"+_li.length;
    _countBox.querySelector(".cu").innerText = "01";
    eventMainSlider();
}
function mainSliderAuto(){
    const _slider = document.querySelector(".main-visual-slider");
    const _bt = document.querySelector(".main-visual-btn.r");
    _slider.speed = 2000;
    if(_slider.autotimer) clearInterval(_slider.autotimer);
    _slider.autotimer = setInterval(()=>{
        _bt.click();   
    },_slider.speed)
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
        _box.style.width = calc + "px";
    }
    const winUp = ()=>{
        window.removeEventListener("mousemove",winMove);
        window.removeEventListener("mouseup",winUp);
    }
    _this.sx = event.pageX;
    _this.w = _box.clientWidth;
    window.addEventListener("mousemove",winMove);
    window.addEventListener("mouseup",winUp);
}

function fieldTextChanged(){
    const _this = event.currentTarget;
    const _label = _this.closest("label");
    const len = _this.value.length;
    if(len > 0){
        _label.classList.add("resetBt_active");
    }else{
        _label.classList.remove("resetBt_active");
    }
}

function resetTextField(){
    const _this = event.currentTarget;
    const _label = _this.closest("label");
    const _input = _label.querySelector("input");
    _label.classList.remove("resetBt_active");
    _input.value = "";
    _input.focus();

}

function setPopLabel(){
    const _labels = document.querySelectorAll(".menuParent > h4 > .menu-switch, .menuParent > ul > li > div");
    _labels.forEach((l,i)=>{
        l.addEventListener("mouseover",()=>{
            const _this = event.currentTarget;
            const _pop = _this.querySelector(".pop_label");
            const _pops = document.querySelectorAll(".pop_label");
            const max = document.querySelector(".lnbMenuLayout").getBoundingClientRect().bottom;
            const style = _this.getBoundingClientRect();
            const point = (style.top + _pop.clientHeight);
            if(point >= max){
                _pop.classList.add("top");
            }else{
                _pop.classList.remove("top");
            }
            _pops.forEach((p,i)=>{
                if(p === _pop){
                    p.classList.add("open");
                }else{
                    p.classList.remove("open");
                }
            })
        })
        l.addEventListener("mouseleave",()=>{
            const _this = event.currentTarget;
            const _pops = document.querySelectorAll(".pop_label");
            _pops.forEach((p,i)=>{
                p.classList.remove("open");
            })
        })
    })
}

// init
function init(){
    const _count = document.querySelector("#mainCount");
    getCounting(_count);
    
    document.querySelectorAll(".menu-switch input").forEach((c,i)=>{
        const ev = document.createEvent("HTMLEvents");
        ev.initEvent("change",true,true);
        c.dispatchEvent(ev);
    })
    setPopLabel();
    mainSliderAuto();
    
    settingMainSlider();
}

window.onload = function(){
    init();
}