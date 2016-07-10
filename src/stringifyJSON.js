// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { 
	if (typeof obj === 'boolean' || typeof obj === 'number') { //checks numbers and booleans
		return obj.toString();
	} else if (obj === null) { //checks null
		return "null";
	}
	
	
	
	var keys = Object.keys(obj);
	var key = keys[0];
	if (keys.length === 1) {
		return '{"' + key + '"' + ':"' + obj[key] + '"}';
	} else {
		var strung = '{"' + key + '"' + ':"' + obj[key] + '"';
		delete obj[key];
		return strung + ',' + stringifyJSON(obj).slice(1);
	}
};
