angular.module('starter')
.controller('HomeController' , function($scope, $appBakery){

	$scope.init = function(){

	 	$scope.menu = $appBakery.menu(); 

	};


	$scope.init();

})
.controller('MobletController' , function($scope, $stateParams , $appBakery){
	
	$scope.init = function(){
	 	$scope.pageDefinitions = $appBakery.getPageDefinitions($stateParams.pageId);
	 	console.log($scope.pageDefinitions);
	};

	$scope.init();


});


