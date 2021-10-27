
  
(function(window) {
	var phrase = "Good Bye";
	var bye = function (name) {
  		console.log(phrase + " " + name);
	}
	
	window.bye = bye;

})(window);