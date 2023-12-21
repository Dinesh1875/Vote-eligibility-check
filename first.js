//Checking Eligibility for vote
let age;
document.getElementById("mybutton").onclick=function(){
 age = document.getElementById("age").value;
if(age>=18){
   document.getElementById("output").innerHTML="You are Eligible vote";
}else if(age>=10){
    document.getElementById("output").innerHTML="You are Adult";
}else if(age>0){
    document.getElementById("output").innerHTML="You are a Child ";
}else{
    document.getElementById("output").innerHTML="Hey! Enter your age ";
}
}