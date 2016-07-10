// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var basicType = function(obj) { //stringifies non-object and array data-types
    if (typeof obj === 'boolean' || typeof obj === 'number') { //checks numbers and booleans
      return obj.toString();
    } else if (obj === null) { //checks null
      return "null";
    } else if (typeof obj === 'string') { //checks strings
      return '"' + obj + '"';
    }
  };

  if (Array.isArray(obj)) { // for arrays
    var strungArray = [];
    for (var i = 0; i < obj.length; i++) { // iterate through current dimension
      var item = obj[i];
	  if (item === undefined) { 
		strungArray.push(null); 
	  } else if (typeof item !== 'object') {
        strungArray.push(basicType(item));
      } else {
        strungArray.push(stringifyJSON(item)); // recursive call deeper into array
      }
    }
    return '[' + strungArray.join(',') + ']';
  }

  if (obj !== null && typeof obj === 'object') { //for objects
    var keys = Object.keys(obj);
    var strungArray = [];
    for (var i = 0; i < keys.length; i++) {
      var value = obj[keys[i]];
      var key = keys[i];
	  if (value === undefined || typeof value === 'function') {
		continue;
	  } else if (typeof value !== 'object' || value === null) {
        strungArray.push('"' + key + '":' + basicType(value));
      } else {
        strungArray.push('"' + key + '":' + stringifyJSON(value)); // recursive call deeper into object
      }
    }
    return '{' + strungArray.join(',') + '}';
  }

  return basicType(obj);

};
