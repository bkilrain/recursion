// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { 
	var keys = Object.keys(obj);
	var key = keys[0];
	console.log(keys);
	if (keys.length === 1) {
		return '"' + key + '"' + ':' + obj[key] + "}";
	} else {
		var strung = '"' + key + '"' + ':' + obj[key]
		delete obj[key];
		return strung + ',' + stringifyJSON(obj);
	}
};

console.log('finished: ', stringifyJSON({x:2,y:3,z:4}));
