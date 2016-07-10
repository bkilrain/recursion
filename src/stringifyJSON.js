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
    for (var i = 0; i < obj.length; i++) {
      var item = obj[i];
      if (typeof item !== 'object') {
        strungArray.push(basicType(item));
      } else {
        strungArray.push(stringifyJSON(item));
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
      if (typeof value !== 'object' || value === null) {
        strungArray.push('"' + key + '":' + basicType(value));
      } else {
        strungArray.push('"' + key + '":' + stringifyJSON(value));
      }
    }
    return '{' + strungArray.join(',') + '}';
  }

};
