// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

// string traverser
  var nextLandmark = function(string, nextIndex) {
  	string = string.slice(0, nextIndex);
  	checkGrammar();
  }

//check next grammar pattern
  var checkGrammar = function() {

  // regex variables to flag json components
  	var objStart = /\{/;
  	var objEnd = /\}/;
  	var parenth = /\"/;
  	var arrayStart = /\[/;
  	var arrayEnd = /\]/;
  	var inQuotes = /"(.*?)"/;





  }

//call when object start is matched
  var getObject = function(string) {

  	return {nextLandmark(1)};
  }

  var getQuotes = function(string) {
  	
  }
};
