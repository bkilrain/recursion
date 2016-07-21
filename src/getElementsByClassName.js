// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
	node = node || document.body;
  	var elements = [];
	
	if (node.classList) {
			if (node.classList.contains(className)) {
				elements.push(node);
			}
		}

	for (var i = 0; i < node.children.length; i++) {
		var results = getElementsByClassName(className, node.children[i]);
		elements = elements.concat(results);
	}
	
	
	return elements;




// Original program before watching lecture

  /*var elements = [];
	var checkNode = function(node) {
		if (node.classList) {
			if (node.classList.contains(className)) {
				elements.push(node);
			}
		}
		for (var i = 0; i < node.childNodes.length; i++) {
			checkNode(node.childNodes[i]);
		}
	}
	checkNode(document.body);
	return elements;*/
};
