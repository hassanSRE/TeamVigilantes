$(document).ready(function() {
	addLocations();
	addCatagories();
	callbackCatagory1();
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
		// console.log(data);
		data.Subcategories.forEach(function(value, key){
			var value = value.Name;
		 	var option = "<option>"+value+"</option>";
	    ld.append(option);
		})
	});
}

function callbackCatagory1(){
	$('#category1-drop')
            .change(function(e) {
            	console.log($('#category1-drop').val());
            })
            .end()
}

function myFunction(){
	console.log('hi');
}

