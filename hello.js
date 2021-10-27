(function(window) {
	var phrase = "Hello";
	var hello = function (name) {
		console.log(phrase + " " + name);
	}

	window.hello = hello;

})(window);
