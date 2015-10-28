var path = require('path');
var fs   = require('fs');

angular.module("Moblets")
.directive('uList' , function($http){
	return {
		restrict:'E',
		scope:{url:"=" , code:"="},
        template: fs.readFileSync(path.join(__dirname, 'u-list.html'), 'utf8'),
        link:function(scope){

        	//load data usimple
        	$http.get(scope.url + scope.code + ".json" )
        	.success(function(data){
        		scope.items = data.items;
        	})
        	.error(function(error){
        		console.log(error);
        	});

        }
	}

})