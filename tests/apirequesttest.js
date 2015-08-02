describe("Api request test", function() {
  it("contains spec with an expectation", function() {

    expect(true).toBe(true);
  });
});

describe("JSON attributes as expected", function() {

    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("should work for objects", function() {
  
    var expectedJson = '{"members" : ['+
    					'{"memberId": 12, "nick":"jipsy8",'+
    					'"stolenItems" :[{"itemid" : "hh4355", "thumb": "url:http://www.trademe.co.nz", "title" : "photo"}] }] }';

       var e = JSON.parse(expectedJson);

      e.members.forEach(function(value){
	      expect(value.memberId).toBeDefined();
	      expect(value.nick).toBeDefined();
	      value.stolenItems.forEach(function(value2){
	      	expect(value2.itemid).toBeDefined();
	      	expect(value2.thumb).toBeDefined();
	      	expect(value2.title).toBeDefined();
	      });
     });


	});
  });
