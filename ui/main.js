console.log('Loaded!');

var button = document.getElementById("cbutton");


button.onclick = function(){
  
  // Create a request object.
  var request = new XmlHttpRequest();
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = function(){
      
      if(request.readState === XmlHttpRequest.DONE) {
          //Take some task
          
          if(requset.status === 200){
              var counter = request.responseText;
              
              var count = document.getElementById("cspan");
              count.innerHTML = counter.toString(); 
          }
      }
      //Not done Yet.
  };
  
  //Make a request.
  request.open("https://http://ajind033.imad.hasura-app.io/counter",true);
  request.send(null);
};