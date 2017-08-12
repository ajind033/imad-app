console.log('Loaded!');

//change the text

var element = document.getElementById("mainText");
element.innerHTML="Radhey-Radhey";

// move the element
var img= document.getElementById("madi");

img.onclick = function(){
   element.innerHTML="Radhey-Radhey"; 
};