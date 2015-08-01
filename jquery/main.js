$(document).ready(function() {
	addLocations();
	addCatagories();
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
	$.getJSON("http://api.trademe.co.nz/v1/Categories.json", function(data){
		var ld = $("#category1-drop");
		console.log(data);
		data.Subcategories.forEach(function(value, key){
			var value = value.Name;
		 	// console.log(pos);
		 	var option = "<option>"+value+"</option>";
	    ld.append(option);
			// console.log(value.Name);
		})
		// for(pos in data.Subcategories.forEach()) {
		// 	console.log(data[pos]);
		//  	// var value = pos.Name;
		//  	// console.log(pos);
		//  	// var option = "<option>"+value+"</option>";
	 //   //  ld.append(option);
		// }
	});
}

