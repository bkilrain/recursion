// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

// string traverser
  var nextLandmark = function(string, nextIndex) {
  	checkGrammar();
  }

//check next grammar pattern
  var checkGrammar = function() {

  // regex variables to flag json components
  	var inCurlies = /\{(.*?)\}/g;
  	var inSquares = /\[(.*?)\]/g;	
  	var inQuotes = /"(.*?)"/g;
    var keyBeforeColon = /"(.*?)"(?=:)/g;





  }

//call when object start is matched
  var getObject = function(string) {

  	return {nextLandmark(string, 1)};
  }

  var getQuotes = function(string) {
  	
  }
};
