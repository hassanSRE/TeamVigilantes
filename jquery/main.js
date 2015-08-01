$(document).ready(function() {
	addLocations();
	addCatagories();
	callbackCatagory1();
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
    	//console.log($('#category1-drop').val());

		$.getJSON("http://api.trademe.co.nz/v1/Categories.json", function(data){
				var ld = $("#category1-drop");
				// console.log(data);
				data.Subcategories.forEach(function(value, key){
					var valueName = value.Name;

					if (valueName === $('#category1-drop').val()){
						//console.log(value);
						value.Subcategories.forEach(function(valuei, key){
							console.log(valuei);
						});
					}

				 	// var option = "<option>"+value+"</option>";
			   //  ld.append(option);
				})


			});
    	
    })
    .end()
	// $('#category1-drop')
 //    .change(function(e) {
 //    	console.log($('#category1-drop').val());



 //    })
 //    .end()
}


