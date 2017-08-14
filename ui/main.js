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
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    
  // Create a request object.
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = function(){
      
      if(this.readyState === 4) {
          //Take some task
          
          if(this.status === 200){
              document.getElementById("temp").innerHTML = this.responseText;
              var names = this.resposne;
              names = JSON.parse(name);
              var temp1 = ["name1","nmae12e"];
              var list = " ";
              for(var i=0; i<names.length; i++){
                  list = "<li>" + temp1[i] + "</li>"
              }
                document.getElementById("namelist").innerHTML = list;
          }
      }
      //Not done Yet.
  };
  var nameinput = document.getElementById("name");
  var  name = nameinput.value;
  //Make a request.
  request.open("GET","http://ajind033.imad.hasura-app.io/submit-name?name="+name,true);
  request.send(null);
};

/*

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

*/
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