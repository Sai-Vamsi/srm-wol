function validfn()
{
var fn=document.getElementById("firstname").value;
//var rel=/^[a-zA-Z\s\'\-']{2,15}$/;
if(fn.length>=10)
 {
    document.getElementById("fnss").innerHTML="FIRST NAME IS MORE THAN 15 CHARACTER";
 }
 else if(fn.length<10&&fn.length>4){
    document.getElementById("fnss").innerHTML="VALID";
 }
}

function validln()
{
var fn=document.getElementById("lastname").value;
//var rel=/^[a-zA-Z\s\'\-']{2,15}$/;
if(fn.length>=10)
 {
    document.getElementById("lnss").innerHTML="LAST NAME IS MORE THAN 15 CHARACTER";
 }
 else if(fn.length<10&&fn.length>4){
    document.getElementById("lnss").innerHTML="VALID";
 }
}
function agecheck()
{
    var age=document.getElementById("age").value;
    //var rel=/^[a-zA-Z\s\'\-']{2,15}$/;
    if(age>65||age<18)
     {
        document.getElementById("ag").innerHTML="INVALID AGE";
     }
     else {
        document.getElementById("ag").innerHTML="VALID AGE";
     } 
}