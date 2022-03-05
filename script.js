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
var num1="";
var op="";
var num2="";
var eq=false;
function Number(keys) {
    switch (keys) {
        case 1:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="1";
                    document.getElementById("result").innerHTML+="1";
                }else {
                    num1+="1";
                    document.getElementById("result").innerHTML+="1";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="1";
                document.getElementById("result").innerHTML+="1";
            }
            break;
        case 2:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="2";
                    document.getElementById("result").innerHTML+="2";
                }else {
                    num1+="2";
                    document.getElementById("result").innerHTML+="2";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="2";
                document.getElementById("result").innerHTML+="2";
            }
            break;
        case 3:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="3";
                    document.getElementById("result").innerHTML+="3";
                }else {
                    num1+="3";
                    document.getElementById("result").innerHTML+="3";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="3";
                document.getElementById("result").innerHTML+="3";
            }
            break;
        case 4:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="4";
                    document.getElementById("result").innerHTML+="4";
                }else {
                    num1+="4";
                    document.getElementById("result").innerHTML+="4";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="4";
                document.getElementById("result").innerHTML+="4";
            }
            break;
        case 5:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="5";
                    document.getElementById("result").innerHTML+="5";
                }else {
                    num1+="5";
                    document.getElementById("result").innerHTML+="5";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="5";
                document.getElementById("result").innerHTML+="5";
            }
            break;
        case 6:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="6";
                    document.getElementById("result").innerHTML+="6";
                }else {
                    num1+="6";
                    document.getElementById("result").innerHTML+="6";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="6";
                document.getElementById("result").innerHTML+="6";
            }
            break;
        case 7:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="7";
                    document.getElementById("result").innerHTML+="7";
                }else {
                    num1+="7";
                    document.getElementById("result").innerHTML+="7";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="7";
                document.getElementById("result").innerHTML+="7";
            }
            break;
        case 8:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="8";
                    document.getElementById("result").innerHTML+="8";
                }else {
                    num1+="8";
                    document.getElementById("result").innerHTML+="8";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="8";
                document.getElementById("result").innerHTML+="8";
            }
            break;
        case 9:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="9";
                    document.getElementById("result").innerHTML+="9";
                }else {
                    num1+="9";
                    document.getElementById("result").innerHTML+="9";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="9";
                document.getElementById("result").innerHTML+="9";
            }
            break;
        case 0:
            if(eq==false) {
                if (op=="*" || op=="/" || op=="-" || op=="+") {
                    num2+="0";
                    document.getElementById("result").innerHTML+="0";
                }else {
                    num1+="0";
                    document.getElementById("result").innerHTML+="0";
                }
            }else {
                num1="";
                op="";
                num2="";
                eq=false;
                document.getElementById("result").innerHTML="";
                num1+="0";
                document.getElementById("result").innerHTML+="0";
            }
            break;
    }
}
function Dot() {
    if (op=="*" || op=="/" || op=="-" || op=="+") {
        if(num2.includes(".")) {
            num2+="";
            document.getElementById("result").innerHTML+="";
        }else {
            num2+=".";
            document.getElementById("result").innerHTML+=".";
        }
    }else {
        if (num1.includes(".")) {
            num1+="";
            document.getElementById("result").innerHTML+="";
        }else {
            num1+=".";
            document.getElementById("result").innerHTML+=".";
        }
    }
}
function Multiple() {
    if (op=="*" || op=="/" || op=="-" || op=="+") {
        op+="";
        document.getElementById("result").innerHTML+="";
    }else {
        op+="*";
        document.getElementById("result").innerHTML+="*";
    }
}
function Divide() {
    if (op=="*" || op=="/" || op=="-" || op=="+") {
        op+="";
        document.getElementById("result").innerHTML+="";
    }else {
        op+="/";
        document.getElementById("result").innerHTML+="/";
    }
}
function Minus() {
    if (op=="*" || op=="/" || op=="-" || op=="+") {
        op+="";
        document.getElementById("result").innerHTML+="";
    }else {
        op+="-";
        document.getElementById("result").innerHTML+="-";
    }
}
function Plus() {
    if (op=="*" || op=="/" || op=="-" || op=="+") {
        op+="";
        document.getElementById("result").innerHTML+="";
    }else {
        op+="+";
        document.getElementById("result").innerHTML+="+";
    }
}
function Equal() {
    if(eq==false) {
        if (op=="*") {
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            document.getElementById("result").innerHTML+="<br>=";
            document.getElementById("result").innerHTML+=num1*num2;
        }else if (op=="/") {
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            document.getElementById("result").innerHTML+="<br>=";
            document.getElementById("result").innerHTML+=num1/num2;
        }else if (op=="-") {
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            document.getElementById("result").innerHTML+="<br>=";
            document.getElementById("result").innerHTML+=num1-num2;
        }else if (op=="+") {
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            document.getElementById("result").innerHTML+="<br>=";
            document.getElementById("result").innerHTML+=num1+num2;
        }
        eq=true;
    } else {
        document.getElementById("result").innerHTML+="";
    }
}
function Clear() {
    num1="";
    op="";
    num2="";
    eq=false;
    document.getElementById("result").innerHTML="";
}