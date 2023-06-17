/*
    common js
    var 1.0
*/
String.prototype.numberFormat = function(){
    const temp = this;
    const regExp = new RegExp(/(\d)(?=(?:\d{3})+(?!\d))/g,'gi');
    return temp.replace(regExp,"$1,");
}

HTMLElement.prototype.index = function(){
    const _p = this.parentNode;
    const _children = _p.children;
    let idx = -1;
    for(let i=0; i<_children.length; i++){
        const _c = _children[i];
        if(this === _c){
            idx = i;
            break;
        }
    }
    return idx;
}