console.log('Loaded!');

var button = document.getElementById("counter");


button.onclick = function(){
  
  // Create a request object.
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = function(){
      
      if(request.readState === XMLHttpRequest.DONE) {
          //Take some task
          
          if(requset.status === 200){
              var counter = request.responseText;
              
              var count = document.getElementById("count");
              count.innerHTML = counter.toString(); 
          }
      }
      //Not done Yet.
  };
  
  //Make a request.
  request.open("https://http://ajind033.imad.hasura-app.io/counter",true);
  request.send(null);
};


/*
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xmlhttp_info.txt", true);
  xhttp.send();*/