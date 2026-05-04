let display="";
let solved=false;
let pointInTerm=false;
document.querySelector('#op').innerHTML=display;
function toScreen(key){
    if(solved && !["+","-","*","/","**2","**0.5"].includes(key)){
        display="";
        pointInTerm=false;
        solved=false;
    }
    switch(key){
    case ".":
        if(!pointInTerm){
            display+=key;
            pointInTerm=true;
        }   
        break;
    case "C":
        display="";
        solved=false;
        pointInTerm=false;
        break;
    case "+":
    case "-":
    case "*":
    case "/":
        if(display!=="") {
            if(["+","-","*","/"].includes(display[display.length-1])){
                display=display.slice(0,display.length-1)+key;
            }
            else{
                display+=key;
            }
            solved=false;
            pointInTerm=false;
        }
        break;
    case "**2":
    case "**0.5":
        if(display!=="" && !display.endsWith("**2") && !display.endsWith("**0.5") && !(["+","-","*","/"].includes(display.slice(-1)))){
            display+=key;
            solved=false;
            pointInTerm=true;
        }
        break;
   default:
        display+=key;
    }
    document.querySelector('#op').innerHTML=display;
}
function compute(){
    if(!["+","-","*","/"].includes(display.slice(-1))){
        display=(eval(display).toString());;
        document.querySelector('#op').innerHTML=display;
        solved=true;
        console.log('Solved');
    }
}
function bkspc(){
    if(solved){
        solved=false;
        display="";
        pointInTerm=false;
        console.log("screen clear");
    }
    if(display.endsWith("**2")){
        display=display.slice(0,-3);
    }
    else if(display.endsWith("**0.5")){
        display=display.slice(0,-5);
    }
    else if(display.endsWith(".")){
        display=display.slice(0,-1);
        pointInTerm=false;
    }
    else{
        display=display.slice(0,-1);
    }
    document.querySelector('#op').innerHTML=display;
}