var container = document.getElementById("currentContainer");
container.style.display = 'none';
console.log("js start");
$.ajax({
  type: "GET",
 datatype : 'jsonp',
  url: "http://sparkachange.herokuapp.com/get.php", 
//	url: "http://spark-a-change-server-cryogenicplanet.c9users.io/get.php",
  data: {
	  password: "7B2DB01C070FE5791F6A75DBB43AED01C836166047C32F6DDB24F76437357EB5"
  },
  cache: true,
  success: function(data){
	  console.log("success");
	  console.log(data);
	  if(data.fail != true){
		  container.style.display = 'block';
		    if(data.nameCurrent.search("Siesta") != -1){
			  document.getElementById("linkCurrentEvent").href = "events/siesta";
		  } else if(data.nameCurrent.search("Dream") != -1){
			   document.getElementById("linkCurrentEvent").href = "events/projectDream";
		  } else {
			   document.getElementById("linkCurrentEvent").href = data.linkCurrent;
		  }
    	document.getElementById("nameCurrentEvent").textContent = data.nameCurrent;
	  	document.getElementById("descripCurrentEvent").innerHTML = data.descripCurrent;
	  	document.getElementById("imageCurrentEvent").src = data.imageCurrent;
		   document.getElementById("currentProj").innerHTML = "Current Projects";
		  if(data.upcomingTrue && data.nameCurrent != data.nameUpcoming){
			  if(data.nameUpcoming.search("Siesta") != -1){
			  document.getElementById("linkUpcomingEvent").href = "events/siesta";
		  } else if(data.nameUpcoming.search("Dream") != -1){
			   document.getElementById("linkUpcomingEvent").href = "events/projectDream";
		  } else {
			   document.getElementById("linkUpcomingEvent").href = data.linkCurrent;
		  }
			 document.getElementById("nameUpcomingEvent").textContent = data.nameUpcoming;
		  document.getElementById("descripUpcomingEvent").innerHTML = data.descripUpcoming; 
		  }
	  }else{
		 document.getElementById("imageCurrentEvent").style.display = 'none';
	  }
	   if(data.nameCurrent.search("Siesta") != -1 || data.nameUpcoming.search("Siesta") != -1){
		  document.getElementById("siesta").style.display = 'none';
	  }
	  if(data.nameCurrent.search("Dream") != -1 || data.nameUpcoming.search("Dream") != -1){
		  document.getElementById("projectDream").style.display = 'none';
	  }
  }
});
	