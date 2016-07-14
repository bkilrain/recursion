// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
    var numRegex = /-?\d*\.?\d+/g

//check next grammar pattern
  var checkGrammar = function(string, start, end) {
    if (string.indexOf('[', start) >= 0) {
      return getArray(string, string.indexOf('['), end);
    } else if (string.search(numRegex) >= 0) {
      return getNumber(string)
    }
  


  }

//call when object start is matched
  var getObject = function(string) {

  }

  var getQuotes = function(string) {
  	
  }

  var getArray = function(string, start, end) {
    var endIndex = string.lastIndexOf(']');
    return [checkGrammar(string, start + 1, endIndex - 1)];
  }

  var getNumber = function(string) { // returns next number in string (don't need start or end args
    var info = numRegex.exec(string) // because it's built into the regex exec method)
    var endIndex = numRegex.lastIndex;
    return Number(info[0]);
  }

  var test = "[-32.42]"
  console.log(checkGrammar(test, 0, test.length - 1));
};
