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
              var nameTemp = this.responseText;
              document.getElementById("temp").innerHTML = nameTemp;
             var nas = JSON.parse(nameTemp);
            //  var temp1 = ["name1","nmae12e"];
            
            var  temp11 = document.getElementById("temp11");
            var qwe=" ";
              var list = " ";
              for(var i=0; i<nas.length; i++){
                  list = list+ "<li>" + nas[i] + "</li>";
                  qwe = qwe + nas[i];
              }
              
                temp11.innerHTML = list;
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