var path = require('path');
var fs   = require('fs');

angular.module("Moblets")
.directive('baseMoblet' , function(){
	return {
		restrict:'E',
		// templateUrl: "/moblets/base-moblet/base-moblet.html",
        template: fs.readFileSync(path.join(__dirname, 'base-moblet.html'), 'utf8'),
	}

})