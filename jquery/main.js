$(document).ready(function() {
	addLocations();
});

//Locations
function addLocations() {
	$.getJSON("https://api.trademe.co.nz/v1/Localities/Regions.json", function(data){
		var ld = $("#location-drop");
		for(pos in data) {
		 	var value = data[pos].Name;
		 	var option = "<option>"+value+"</option>";
	    ld.append(option);
		}
		console.log(ld.val());
		// var districts = data[selectedLocation].Districts;
		// var dd = $('#district-drop');
		// console.log(districts);
		// for(pos in districts) {
		// 	var value = district[pos].Name;
		// 	var option = "<option>"+value+"</option>";
	 //    dd.append(option);
		// }
	});
}

//Catagories

function addCatagories() {

}