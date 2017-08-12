console.log('Loaded!');

//change the text

var element = document.getElementById("mainText");
element.innerHTML="Radhey-Radhey";

// move the element
var img= document.getElementById("madi");

function moveRight (){
    marginleft = marginleft +5;
    img.style.marginLeft = marginleft+"px";   
}

img.onclick = function(){
  
  var interval =setInterval(moveRight,50);
  
};