$(document).ready(
	addLocations
);

//Locations
var tempList = {1:"one", 2:"two", 3:"three"};


function addLocations() {
	console.log("hi!");
	var ourText = 'wat';
	var option = "<option>"+ourText+"</option>";
  var ld = $("#location-drop");
  ld.append(option);
  console.log(option);
  console.log(ld);

}

//Catagories

