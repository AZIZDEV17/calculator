function testKeyCode(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    var e = e || window.event;
               if (e.ctrlKey &&
                      (e.keyCode === 67 ||
                       e.keyCode === 86 ||
                       e.keyCode === 85 ||
                       e.keyCode === 73 ||
                       e.keyCode === 74 ||
                       e.keyCode === 83 ||
                       e.keyCode === 117)) {
        alert('This website is protected against attempts to clone. Your IP has been duly recorded on our server and if you persist it will be forwarded to the competent authorities');
       return false;
       } else {
        return true;
       }
    }
    document.onkeydown = testKeyCode;
function Simple() {
    var simple=document.getElementById("simple");
    var basic=document.getElementById("basic");
    var container=document.getElementById("container");
    var container1=document.getElementById("calc");
    basic.style.backgroundColor="rgb(255,255,255)";
    basic.style.color="rgb(0,0,0)";
    simple.style.backgroundColor="rgb(134,134,134)";
    simple.style.color="rgb(255,255,255)";
    container1.style.display="none";
    container.style.display="flex";
}
function Basic() {
    var simple=document.getElementById("simple");
    var basic=document.getElementById("basic");
    var container=document.getElementById("container");
    var container1=document.getElementById("calc");
    basic.style.backgroundColor="rgb(134,134,134)";
    basic.style.color="rgb(255,255,255)";
    simple.style.backgroundColor="rgb(255,255,255)";
    simple.style.color="rgb(0,0,0)";
    container1.style.display="flex";
    container.style.display="none";
}
function Hisob() {
    var num1=document.getElementById("son1").value;
    num1=parseFloat(num1);
    var op=document.getElementById("amal").value;
    var num2=document.getElementById("son2").value;
    num2=parseFloat(num2);
    var equal=document.getElementById("javob");
    if(op=="+"){
        equal.innerHTML=num1+num2;
    }else if(op=="-"){
        equal.innerHTML=num1-num2;
    }
    else if(op=="*"){
        equal.innerHTML=num1*num2;
    }
    else if(op=="/"){
        equal.innerHTML=num1/num2;
    }
}
function Ochir() {
    var num1=document.getElementById("son1");
    var op=document.getElementById("amal");
    var num2=document.getElementById("son2");
    var equal=document.getElementById("javob");
    num1.value="";
    op.value="";
    num2.value="";
    equal.innerHTML="";
}
var prgrs="";
var eq=false;
var sqrt=false;
var pi=false;
var dot=false;
var op=false;
var br=false;
var mns=false;
var bkts=0;
var pow=false;
var po1=0;
var po=0;
var fac=false;
var fa=0;
function Number0(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="0";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="0";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number1(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="1";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="1";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number2(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="2";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="2";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number3(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="3";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="3";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number4(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="4";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="4";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number5(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="5";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="5";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number6(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="6";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="6";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number7(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="7";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="7";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number8(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="8";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="8";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number9(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs="9";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="9";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
}
function Number10(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(op==true){
        prgrs+="×";
        document.getElementById("result").innerHTML=prgrs;
        mns=false;
    }else if(mns==false && (prgrs.slice(-1)=="×" || prgrs.slice(-1)=="÷" || prgrs.slice(-1)=="-" || prgrs.slice(-1)=="+")){
        prgrs=prgrs.slice(0, -1);
        prgrs+="×";
        document.getElementById("result").innerHTML=prgrs;
    }
    op=false;
    dot=false;
    eq=false;
}
function Number11(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+="√(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="√(";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    dot=false;
    bkts++;
    sqrt=true;
}
function Number12(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+="^(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="^(";
        document.getElementById("result").innerHTML=prgrs;
    }
    pow=true;
    br=true;
    op=true;
    eq=false;
    dot=false;
    po++;
    po1++;
}
function Number13(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(op==true){
        prgrs+="÷";
        document.getElementById("result").innerHTML=prgrs;
        mns=false;
    }else if(mns==false && (prgrs.slice(-1)=="×" || prgrs.slice(-1)=="÷" || prgrs.slice(-1)=="-" || prgrs.slice(-1)=="+")){
        prgrs=prgrs.slice(0, -1);
        prgrs+="÷";
        document.getElementById("result").innerHTML=prgrs;
    }
    op=false;
    dot=false;
    eq=false;
}
function Number14(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+="π";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="π";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
    pi=true;
    dot=false;
}
function Number15(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+="e";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="e";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;
    op=true;
    dot=false;
}
function Number16(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(op==true){
        prgrs+="-";
        document.getElementById("result").innerHTML=prgrs;
        mns=false;
    }else if(mns==false && (prgrs.slice(-1)=="×" || prgrs.slice(-1)=="÷" || prgrs.slice(-1)=="-" || prgrs.slice(-1)=="+")){
        prgrs=prgrs.slice(0, -1);
        prgrs+="-";
        document.getElementById("result").innerHTML=prgrs;
    }else if(br==true){
        br=false;
        mns=true;
        prgrs+="-";
        document.getElementById("result").innerHTML=prgrs;
    }
    op=false;
    dot=false;
    eq=false;
}
function Number17(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+=" sin(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+=" sin(";
        document.getElementById("result").innerHTML=prgrs;
    }
    bkts++;
    dot=false;
    eq=false;
}
function Number18(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+=" cos(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+=" cos(";
        document.getElementById("result").innerHTML=prgrs;
    }
    bkts++;
    eq=false;
    dot=false;
}
function Number19(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs=".";
        document.getElementById("result").innerHTML=prgrs;
    }else if(dot==false){
        prgrs+=".";
        document.getElementById("result").innerHTML=prgrs;
    }
    dot=true;
    eq=false;
}
function Number20(){
    if(eq==false){
        if(pow==true){
            while(po>0){
                bkts++;
                po--;
            }
        }
        for(bkts;bkts>0;bkts--){
            prgrs+=")";
            document.getElementById("result").innerHTML=prgrs;
        }
        for (let index = 0; index <= prgrs.length; index++) {
            prgrs=prgrs.replace("%"," /100 ");
            prgrs=prgrs.replace("÷","/ ");
            prgrs=prgrs.replace("×","*");
            prgrs=prgrs.replace("√","Math.sqrt");
            prgrs=prgrs.replace("π","Math.PI");
            prgrs=prgrs.replace("e","Math.E");
            prgrs=prgrs.replace(" sin","Math.sin");
            prgrs=prgrs.replace(" cos","Math.cos");
            prgrs=prgrs.replace(" tan","Math.tan");
            prgrs=prgrs.replace(" ln","Math.log ");
            prgrs=prgrs.replace(" log","Math.log10");
        }
        if(pow==true){
            var po2=po1;
            while(po2>0){
                var ind=prgrs.indexOf("^");
                for(var i=ind;i>=0;i--){
                    if(prgrs[i]=="+" || prgrs[i]=="-" || prgrs[i]=="*" || prgrs[i]=="/" || prgrs[i]=="(" || prgrs[i]==")"){
                        prgrs=prgrs.substring(0,i+1)+"Math.pow("+prgrs.substring(i+1,prgrs.length);
                        prgrs=prgrs.replace("^(",",");
                        break;
                    }else if(i==0){
                        prgrs="Math.pow("+prgrs.substring(0,prgrs.length);
                        prgrs=prgrs.replace("^(",",");
                        break;
                    }
                }
                po2--;
            }
        }
        if(fac==true){
            function fact(x){
                var va=1;
                while(x>0){
                    va*=x;
                    x--;
                }
                return va;
            }
            var fa1=fa;
            while (fa1>0) {
                var len=prgrs.indexOf("!");
                for(var i=len;i>=0;i--){
                    if(prgrs[i]=="+" || prgrs[i]=="-" || prgrs[i]=="*" || prgrs[i]=="/" || prgrs[i]=="(" || prgrs[i]==")"){
                        prgrs=prgrs.substring(0,i+1)+"fact("+prgrs.substring(i+1,prgrs.length);
                        prgrs=prgrs.replace("!",")");
                        break;
                    }else if(i==0){
                        prgrs="fact("+prgrs.substring(0,prgrs.length);
                        prgrs=prgrs.replace("!",")");
                        break;
                    }
                }
                fa1--;
            }
        }
        document.getElementById("result").innerHTML+="=<br><h2>"+eval(prgrs)+"</h2>";
        eq=true;
        br=false;
    } else {
        document.getElementById("result").innerHTML+="";
    }
}
function Number21(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(op==true){
        prgrs+="+";
        document.getElementById("result").innerHTML=prgrs;
        mns=false;
    }else if(mns==false && (prgrs.slice(-1)=="×" || prgrs.slice(-1)=="÷" || prgrs.slice(-1)=="-" || prgrs.slice(-1)=="+")){
        prgrs=prgrs.slice(0, -1);
        prgrs+="+";
        document.getElementById("result").innerHTML=prgrs;
    }
    dot=false;
    op=false;
    eq=false;
}
function Number22(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+=" tan(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+=" tan(";
        document.getElementById("result").innerHTML=prgrs;
    }
    bkts++;
    dot=false;
    eq=false;
}
function Number23(){
    prgrs+="!";
    document.getElementById("result").innerHTML=prgrs;
    fac=true;
    fa++;
}
function Number24(){
    prgrs="";
    document.getElementById("result").innerHTML=prgrs;
    pow=false;
    po=0;
    po1=0;
    bkts=0;
    br=false;
    dot=false;
    eq=false;
    op=false;
    fac=false;
    fa=0;
}
function Number25(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(prgrs.substring(prgrs.length-1)=="("){
        bkts--;
    }else if(prgrs.substring(prgrs.length-1)==")"){
        bkts++;
    }
    prgrs=prgrs.slice(0, -1);
    document.getElementById("result").innerHTML=prgrs;
    eq=false;
    mns=false;
    if(mns==false && (prgrs.slice(-1)=="×" || prgrs.slice(-1)=="÷" || prgrs.slice(-1)=="-" || prgrs.slice(-1)=="+")){
        op=false;
    }else{
        op=true;
    }
}
function Number26(){
    if(br==false){
        for (let index = 0; index <= prgrs.length; index++) {
            prgrs=prgrs.replace(" /100 ","%");
            prgrs=prgrs.replace("/ ","÷");
            prgrs=prgrs.replace("*","×");
            prgrs=prgrs.replace("Math.sqrt","√");
            prgrs=prgrs.replace("Math.PI","π");
            prgrs=prgrs.replace("Math.E","e");
            prgrs=prgrs.replace("Math.sin"," sin");
            prgrs=prgrs.replace("Math.cos"," cos");
            prgrs=prgrs.replace("Math.tan"," tan");
            prgrs=prgrs.replace("Math.log "," ln");
            prgrs=prgrs.replace("Math.log10"," log");
            prgrs=prgrs.replace(",","^(");
            prgrs=prgrs.replace("Math.pow(","");
        }
        if(fac==true){
            var fa2=fa;
            while(fa2>0){
                var len=prgrs.indexOf("fact(");
                for(var i=len;i<=prgrs.length;i++){
                    if(prgrs[i]==")"){
                        prgrs=prgrs.replace(prgrs[i],"!");
                        prgrs=prgrs.replace("fact(","");
                        break;
                    }
                }
                fa2--;
            }
        }
        if(eq==true){
            prgrs="";
            document.getElementById("result").innerHTML="";
            prgrs+="(";
            document.getElementById("result").innerHTML=prgrs;
        }else{
            prgrs+="(";
            document.getElementById("result").innerHTML=prgrs;
        }
        bkts++;
        br=true;
        op=false;
        eq=false;
        dot=false;
    }else{
        for (let index = 0; index <= prgrs.length; index++) {
            prgrs=prgrs.replace(" /100 ","%");
            prgrs=prgrs.replace("/ ","÷");
            prgrs=prgrs.replace("*","×");
            prgrs=prgrs.replace("Math.sqrt","√");
            prgrs=prgrs.replace("Math.PI","π");
            prgrs=prgrs.replace("Math.E","e");
            prgrs=prgrs.replace("Math.sin"," sin");
            prgrs=prgrs.replace("Math.cos"," cos");
            prgrs=prgrs.replace("Math.tan"," tan");
            prgrs=prgrs.replace("Math.log "," ln");
            prgrs=prgrs.replace("Math.log10"," log");
            prgrs=prgrs.replace(",","^(");
            prgrs=prgrs.replace("Math.pow(","");
        }
        if(fac==true){
            var fa2=fa;
            while(fa2>0){
                var len=prgrs.indexOf("fact(");
                for(var i=len;i<=prgrs.length;i++){
                    if(prgrs[i]==")"){
                        prgrs=prgrs.replace(prgrs[i],"!");
                        prgrs=prgrs.replace("fact(","");
                        break;
                    }
                }
                fa2--;
            }
        }
        if(eq==true){
            prgrs="";
            document.getElementById("result").innerHTML="";
            prgrs+=")";
            document.getElementById("result").innerHTML=prgrs;
        }else{
            prgrs+=")";
            document.getElementById("result").innerHTML=prgrs;
        }
        mns=false;
        bkts--;
        br=false;
        op=true;
        eq=false;
        dot=false;
    }
}
function Number27(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+="%";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+="%";
        document.getElementById("result").innerHTML=prgrs;
    }
    eq=false;

}
function Number28(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+=" ln(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+=" ln(";
        document.getElementById("result").innerHTML=prgrs;
    }
    bkts++;
    dot=false;
    eq=false;
}
function Number29(){
    for (let index = 0; index <= prgrs.length; index++) {
        prgrs=prgrs.replace(" /100 ","%");
        prgrs=prgrs.replace("/ ","÷");
        prgrs=prgrs.replace("*","×");
        prgrs=prgrs.replace("Math.sqrt","√");
        prgrs=prgrs.replace("Math.PI","π");
        prgrs=prgrs.replace("Math.E","e");
        prgrs=prgrs.replace("Math.sin"," sin");
        prgrs=prgrs.replace("Math.cos"," cos");
        prgrs=prgrs.replace("Math.tan"," tan");
        prgrs=prgrs.replace("Math.log "," ln");
        prgrs=prgrs.replace("Math.log10"," log");
        prgrs=prgrs.replace(",","^(");
        prgrs=prgrs.replace("Math.pow(","");
    }
    if(fac==true){
        var fa2=fa;
        while(fa2>0){
            var len=prgrs.indexOf("fact(");
            for(var i=len;i<=prgrs.length;i++){
                if(prgrs[i]==")"){
                    prgrs=prgrs.replace(prgrs[i],"!");
                    prgrs=prgrs.replace("fact(","");
                    break;
                }
            }
            fa2--;
        }
    }
    if(eq==true){
        prgrs="";
        document.getElementById("result").innerHTML="";
        prgrs+=" log(";
        document.getElementById("result").innerHTML=prgrs;
    }else{
        prgrs+=" log(";
        document.getElementById("result").innerHTML=prgrs;
    }
    bkts++;
    dot=false;
    eq=false;
}