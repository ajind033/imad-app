console.log('Loaded!');

var button = document.getElementById("counter");


button.onclick = function(){
  
  // Create a request object.
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = function(){
      
      if(this.readyState === 4) {
          //Take some task
          
          if(this.status === 200){
              document.getElementById("count").innerHTML = this.responseText;
          }
      }
      //Not done Yet.
  };
  
  //Make a request.
  request.open("GET","http://ajind033.imad.hasura-app.io/counter",true);
  request.send(null);
};

// submit name
var nameinput = document.getElementId("name");
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      
      if(this.readystate == 4 && this.status == 200){
          var names= this.responseText;
          names = JSON.parse(names);
          document.getElementById("namelist").innerHTML = names;
      }  
    };
    
    var name = nameinput.value;
    
  request.open("GET","http://ajind033.imad.hasura-app.io/submit-name?name="+name,true);
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