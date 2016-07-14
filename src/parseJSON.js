// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var indx = 0;
  var char;
  
// string traverser
  var nextCheck = function() {
    indx++;
    char = json.charAt(indx);
    return char;
  }

  var grammar = function() {
    if (char === '{') {
      return getObject();
    } else if (char === '[') {
      return getArray();
    } else if (/[-\d]/.test(char)) {
      return getNumber; 
    } else if (char === '"') {
      return getString();
    } else if (char === 't' || char === 'f') {
      return getBoolean();
    } else if (char === 'n') {
      return getNull();
    } else {
      throw 'invalid input';
    }
  }
    
// functions that return chunks of grammar and update traverser variable

  var null = function() {
    
  }
};
