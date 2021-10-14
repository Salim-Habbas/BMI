document.addEventListener("DOMContentLoaded",function(){
document.querySelector("form").onsubmit = function(){
let weight = document.querySelector("#weight").value;
let height = document.querySelector("#height").value/100;
let temp = weight / (height*height) ;
console.log(temp);
let bmi = (temp);
console.log(bmi);
if( bmi < 18.5){document.querySelector("p").innerHTML="you are underweight";}
else if(bmi >= 18.5 && bmi <= 24.9 ){document.querySelector("p").innerHTML="you are ok!";}
else{document.querySelector("p").innerHTML="you are overweight";}
return false;
}

});


// .tofixed();