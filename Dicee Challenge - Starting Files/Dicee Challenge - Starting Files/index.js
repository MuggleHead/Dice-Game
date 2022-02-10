
var  randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomimg="dice"+randomNumber1+".png";
var randomSrcIm="images/"+randomimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSrcIm);
var  randomNumber2=Math.floor(Math.random() * 6) + 1;
var ranimg="dice"+randomNumber2+".png";
var randomSrIm="images/"+ranimg;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSrIm);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="⭐Play1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="⭐Play2 wins";
}
else {
    document.querySelector("h1").innerHTML="👯‍♂️Draw";
}
