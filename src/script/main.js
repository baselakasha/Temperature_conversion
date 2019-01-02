function ctf(val){ // celsius to fahrenheit
    return 1.8*Number(val)+32;
}
function ctk(val){ // celsius to kelvin 
    return Number(val)+273;
}
function ftc(val){ // fahrenheit to celsius 
    return ((Number(val)-32)*(5/9));
}
function ktc(val){ // kelvin to celsius 
    return (Number(val)-273);
}
function warring(elem){ 
    elem.style.border="2px solid red";
    elem.addEventListener("input", function(){
        elem.style.border="none";
    });
}
window.onload=function(){
    "use strict";
    var celsius=document.getElementById("celsius"),
        fahrenheit=document.getElementById("fahrenheit"),
        kelvin=document.getElementById("kelvin");
    
    celsius.addEventListener("input",function(){
        setTimeout(function(){
            if(celsius.value!="" && !isNaN(celsius.value)){
                fahrenheit.value=ctf(celsius.value); 
                kelvin.value=ctk(celsius.value);       
            }
            else if(celsius.value.length==0){
                fahrenheit.value=""; 
                kelvin.value="";    
            }
            else{
	             warring(celsius);
            }
        },100);
    });
    
    fahrenheit.addEventListener("input",function(){    
       setTimeout(function(){
            if(fahrenheit.value!="" && !isNaN(fahrenheit.value)){
                var ftcVal=ftc(fahrenheit.value);
                celsius.value=ftcVal;
                kelvin.value=ctk(ftcVal);
            }
            else if(fahrenheit.value.length==0){
                kelvin.value=""; 
                celsius.value="";
            }
            else{
	             warring(fahrenheit);
            }
        },350);      
    });
    
    kelvin.addEventListener("input",function(){
        setTimeout(function(){
            if(kelvin.value!=""&&!isNaN(kelvin.value)){
               var celsiusValue=ktc(kelvin.value);
               celsius.value=celsiusValue;
               fahrenheit.value=ctf(celsiusValue);
            }
            else if(kelvin.value.length==0){
                celsius.value="";
                fahrenheit.value="";
            }
            else{
	             warring(kelvin);
            }
        },350);
    });    
};