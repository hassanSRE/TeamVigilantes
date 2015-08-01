$(document).ready(function() {
	addLocations();
});

//Locations

function addLocations() {
	var tempList = ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki" , "Manawatu / Wanganui", "Wellington", "Nelson / Tasmin", "Malborough", "West Coast", "Otago", "Southland"];
	var ld = $("#location-drop");
	for(var value in tempList) {
		var option = "<option>"+tempList[value]+"</option>";
	  ld.append(option);
	}
}

//Catagories

