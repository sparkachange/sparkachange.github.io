//document.getElementById("currentContainer").style.visibility = 'hidden';
//document.getElementById("mapsLink").style.display = 'none';
 //document.getElementById("registrationLink").style.display = 'none';
console.log("in js");
//document.getElementById("split").style.display = 'none';
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
	  if(data.fail != true){
		  console.log(data);
		  if(data.nameCurrent.search("Siesta") != -1){
			document.getElementById("image").src = data.imageCurrent;
			  getAll(data.nameCurrent);
		  } else if(data.nameUpcoming.search("Siesta") != -1){
			document.getElementById("image").src = data.UpcomingImage;
			  getAll(data.nameUpcoming);
		  }
  }
}});

function getAll(name){
	document.getElementById("currentContainer").style.display = 'block';
	console.log("second ajax" + name);
	$.ajax({
  type: "GET",
 datatype : 'jsonp',
  url: "http://sparkachange.herokuapp.com/getAll.php", 
//	url: "http://spark-a-change-server-cryogenicplanet.c9users.io/get.php",
  data: {
	  password: "7B2DB01C070FE5791F6A75DBB43AED01C836166047C32F6DDB24F76437357EB5",
	  name : name
  },
	 cache: true,
  success: function(data){
	  console.log(data);
	  if(data.fail != true){
		   console.log(data);
		  if(data.Venue != ""){
			  document.getElementById("venue").textContent = "Venue";
			  document.getElementById("venueDescip").innerHTML = data.Venue;
			  document.getElementById("mapsLink").src = data.mapsLink;
		  }
		   if(data.Registraion != ""){
			  document.getElementById("registration").textContent = "Registraions";
			  document.getElementById("registrationDescrip").innerHTML = data.Registration;
			  document.getElementById("registrationLink").src = data.registrationLink;
		  }
		  if(data.extraDetails1 != "" || data.extraDetails2 != ""){
			   document.getElementById("details").textContent = "Additional Details";
			  if(data.extraDetails1 != ""){
				   document.getElementById("extraDetails1").innerHTML = data.extraDetails1;
				 if(data.extraDetails2 != ""){
					 document.getElementById("extraDetails2").innerHTML = data.extraDetails2;
				 }
			  } else  if(data.extraDetails2 != ""){
					 document.getElementById("extraDetails1").innerHTML = data.extraDetails2;
				 }
}
	  }

}});}