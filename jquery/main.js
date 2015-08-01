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
	$.getJSON("https://api.trademe.co.nz/v1/TmAreas.json", function(data){
		locations = data;
		addLocations();
	});

	$.getJSON("http://api.trademe.co.nz/v1/Categories.json", function(data){
		catagories = data;
		addCatagories();
	});

	addDropdownCallbacks();
}

function addLocations(){
	var ld = $("#location-drop");
	for(pos in locations) {
		 	var value = locations[pos].Name;
		 	var option = "<option value="+pos+">"+value+"</option>";
	    ld.append(option);
	}
}

function addCatagories(){
	var c1d = $("#category1-drop");

	catagories.Subcategories.forEach(function(value, key){
		var valueName = value.Name;
	 	var option = "<option>"+valueName+"</option>";
    c1d.append(option);
	});
}

function addDropdownCallbacks(){
	locationCallback();
	catagory1Callback();
}

function locationCallback(){
	$('#location-drop').change(updateDistricts);
}

function updateDistricts(){

	dd = $('#district-drop');
	//empty whats there
	dd.empty();

	//add new locations
	var currentLocation = $('#location-drop').val();
	var districts = locations[currentLocation].Districts;
	for(pos in districts) {
		 	var value = districts[pos].Name;
		 	var id = districts[pos].DistrictId;
		 	var option = "<option value="+id+">"+value+"</option>";
	    dd.append(option);
	}
}

function catagory1Callback(){
	$('#category1-drop').change(function(){updateCat2();});//update drop2 from 1
	$('#category2-drop').change(function(){updateCat3();});//update drop3 from 2
	$('#category3-drop').change(function(){updateCat4();});//update drop4 from 3
}

function updateCat2(){
	//get the dropdown object to update
	c2 = $('#category2-drop');
	//empty whats already there
	c2.empty();
	//add new catagories
	var currentCat = $('#category1-drop').val();
	catagories.Subcategories.forEach(function(value, key){ //first layer
		if (value.Name === currentCat){
			value.Subcategories.forEach(function(value2, key){ //second layer
				var name = value2.Name;
				var option = "<option>"+name+"</option>";
				c2.append(option);
			});
		}
	});
}

function updateCat3(){
	//get the dropdown object to update
	c3 = $('#category3-drop');
	//empty whats already there
	c3.empty();
	//add new catagories
	var currentCat1 = $('#category1-drop').val();
	var currentCat2 = $('#category2-drop').val();
	catagories.Subcategories.forEach(function(value, key){ //first layer
		if (value.Name === currentCat1){
			value.Subcategories.forEach(function(value2, key){ //second layer
				if (value2.Name === currentCat2){
					value2.Subcategories.forEach(function(value3, key){ //third layer
						var name = value3.Name;
						var option = "<option>"+name+"</option>";
						c3.append(option);
					})
				}
			});
		}
	});
}

function updateCat4(){
	//get the dropdown object to update
	c4 = $('#category4-drop');
	//empty whats already there
	c4.empty();
	//add new catagories
	var currentCat1 = $('#category1-drop').val();
	var currentCat2 = $('#category2-drop').val();
	var currentCat3 = $('#category3-drop').val();

	catagories.Subcategories.forEach(function(value, key){ //first layer
		if (value.Name === currentCat1){
			value.Subcategories.forEach(function(value2, key){ //second layer
				if (value2.Name === currentCat2){
					value2.Subcategories.forEach(function(value3, key){ //third layer
						if (value3.Name === currentCat3){
							
							if(value3.Subcategories){//test that we aren't at the end!
								value3.Subcategories.forEach(function(value4, key){ //fourth layer
									var name = value4.Name;
									var option = "<option>"+name+"</option>";
									c4.append(option);
								});
							}else{
								//DO SOMETHING HERE SO WE KNOW THAT IT IS THE END
							}
						}
					})
				}
			});
		}
	});
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


