$(document).ready(function() {
	addLocations();
});

//Locations

function addLocations() {
	var tempList = ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki" , "Manawatu / Wanganui", "Wellington", "Nelson / Tasmin", "Malborough", "West Coast", "Otago", "Southland"];
	$.getJSON("https://api.trademe.co.nz/v1/Localities/Regions.json", function(data){
		var ld = $("#location-drop");
		for(pos in data) {
		 	var value = data[pos].Name;
		 	var option = "<option>"+value+"</option>";
	    ld.append(option);
		}
	});
}

//Catagories

function addCatagories() {

}