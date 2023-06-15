/*
    common js
    var 1.0
*/
String.prototype.numberFormat = function(){
    const temp = this;
    const regExp = new RegExp(/(\d)(?=(?:\d{3})+(?!\d))/g,'gi');
    return temp.replace(regExp,"$1,");
}