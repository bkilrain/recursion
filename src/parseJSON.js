// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:



// FULL DISCLOSURE: My research included looking over (but not copying) 
// the completed JSON parser here: 
// http://wesleytsai.io/2015/06/13/a-json-parser/
 


var parseJSON = function(json) {
  var indx = 0;
  var char = json.charAt(indx);
  
// string traverser
  var advance = function(num) {
    indx += num;
    char = json.charAt(indx);
    return char;
  }

  var error = function(msg) {
    console.error('invalid ' + msg + ' input at index: ' + indx, 'string: ' + json, 'character: ' + char);
    throw undefined;
  }

  var grammar = function() {
    if (char === '{') {
      return getObject();
    } else if (char === '[') {
      return getArray();
    } else if (/[-\d]/.test(char)) {
      return getNumber(); 
    } else if (char === '"') {
      return getString();
    } else if (char === 't' || char === 'f') {
      return getBoolean();
    } else if (char === 'n') {
      return getNull();
    } else if (/\s/.test(char)) { //ignores white space
      advance(1);
      return grammar();
    } else {
      error('grammar');
    }
  }


    
// functions that return chunks of grammar and update traverser variable

  var getNull = function() {
    if (/null/.test(json.slice(indx, indx + 4))) {
      advance(4);
      return null
    } else {
      error('null');
    }
  }

  var getBoolean = function() {
    if (/true/.test(json.slice(indx, indx + 4))) {
      advance(4);
      return true;
    } else if (/false/.test(json.slice(indx, indx + 5))) {
      advance(5);
      return false;
    } else {
      error('boolean');
    }
  }

  var getNumber = function() {
    var numRegex = /-?\d?\.?\d+/;
    var info = numRegex.exec(json.slice(indx));
    var numLength = info[0].length;
    if (numLength > 0) {
      advance(numLength);
      return Number(info[0]);
    } else {
      error('number');
    }
  }

  var getString = function() {
    var strRegex = /".*?"/;
    var info = strRegex.exec(json.slice(indx));
    var strLength = info[0].length;
    if (strLength > 0) {
      advance(strLength);
      return info[0].slice(1,-1); //removes quotation marks on returned value
    } else {
      error('string');
    }
  }

  var getArray = function() {
    var array = [];
    advance(1);


    var buildArray = function() {
      if (char === ']') {
        advance(1);
        return array;
      } else if (array.length === 0) {
        array.push(grammar());
        buildArray();
      } else if (char === ',') {
        advance(1);
        array.push(grammar());
        buildArray();
      } else {
        error('array');
      }
    }
    
    buildArray();
    return array;
    
  }

  var getObject = function() {
    var obj = {};
    advance(1);

    var buildObj = function() {
      if (char === '}') {
        advance(1);
        return obj;
      } else if (char === '"') {
        var key = getString();
        if (char === ':') {
          advance(1); //skip colon
          var value = grammar();
          obj[key] = value;
          buildObj();
        } else {
          error('object');
        }
      } else {
        error('object');
      }
    }
    buildObj();
    return obj;
  }

  return grammar();


};

