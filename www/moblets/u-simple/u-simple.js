var path = require('path');
var fs   = require('fs');

angular.module("Moblets")
.directive('uSimple' , function($http){
	return {
		restrict:'E',
		scope:{url:"="},
        template: fs.readFileSync(path.join(__dirname, 'u-simple.html'), 'utf8'),
        link:function(scope){

        	//load data usimple
        	$http.get(scope.url)
        	.success(function(data){
        		scope.image = data.simple.image;
        		console.log(data.simple.image);
        	})
        	.error(function(error){
        		console.log(error);
        	});

        }
	}

})