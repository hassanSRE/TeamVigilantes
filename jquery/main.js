//Variables for drop downs
var locations;
var catagories;



$(document).ready(function() {
	init();
	// addLocations();
	// addDistricts();
	// addCatagories();
	// callbackCatagory1();
});

function init(){

	//set location and catagories
	$.getJSON("https://api.trademe.co.nz/v1/Localities/Regions.json", function(data){
		locations = data;
		addLocations();
	});

	$.getJSON("http://api.trademe.co.nz/v1/Categories.json", function(data){
		catagories = data;
		addCatagories();
	});

	// addDropdownCallbacks();
}

function addLocations(){
	var ld = $("#location-drop");
	for(pos in locations) {
		 	var value = locations[pos].Name;
		 	var option = "<option>"+value+"</option>";
	    ld.append(option);
		}
}

function addCatagories(){
	var c1d = $("#category1-drop");

	catagories.Subcategories.forEach(function(value, key){
		var valueName = value.Name;
	 	var option = "<option>"+valueName+"</option>";
    c1d.append(option);
	})
}










// //Locations
// function addLocations() {
// 	$.getJSON("https://api.trademe.co.nz/v1/Localities/Regions.json", function(data){
// 		var ld = $("#location-drop");
// 		for(pos in data) {
// 		 	var value = data[pos].Name;
// 		 	var option = "<option>"+value+"</option>";
// 	    ld.append(option);
// 		}
// 		console.log(ld.val());
// 		// var districts = data[selectedLocation].Districts;
// 		// var dd = $('#district-drop');
// 		// console.log(districts);
// 		// for(pos in districts) {
// 		// 	var value = district[pos].Name;
// 		// 	var option = "<option>"+value+"</option>";
// 	 //    dd.append(option);
// 		// }
// 	});
// }

// function addDistricts() {
// 	$('#category1-drop')
//             .change(function(e) {
//             	console.log($('#category1-drop').val());
//             })
//             .end()
// }

// //Catagories

// function addCatagories() {
// 	$.getJSON("http://api.trademe.co.nz/v1/Categories.json", function(data){
// 		var ld = $("#category1-drop");
// 		// console.log(data);
// 		data.Subcategories.forEach(function(value, key){
// 			var value = value.Name;
// 		 	var option = "<option>"+value+"</option>";
// 	    ld.append(option);
// 		})
// 	});
// }

// function callbackCatagory1(){
// 		$('#category1-drop')
//     .change(function(e) {
//     	//console.log($('#category1-drop').val());

// 		$.getJSON("http://api.trademe.co.nz/v1/Categories.json", function(data){
// 				var ld = $("#category1-drop");
// 				// console.log(data);
// 				data.Subcategories.forEach(function(value, key){
// 					var valueName = value.Name;

// 					if (valueName === $('#category1-drop').val()){
// 						//console.log(value);
// 						value.Subcategories.forEach(function(valuei, key){
// 							console.log(valuei);
// 						});
// 					}

// 				 	// var option = "<option>"+value+"</option>";
// 			   //  ld.append(option);
// 				})


// 			});
    	
//     })
//     .end()
// 	// $('#category1-drop')
//  //    .change(function(e) {
//  //    	console.log($('#category1-drop').val());



//  //    })
//  //    .end()
// }


