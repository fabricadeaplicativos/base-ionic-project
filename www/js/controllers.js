angular.module('starter')
.controller('HomeController' , function($scope, $appBakery , AppUrl , $state){

	$scope.init = function(){
		$appBakery.load(AppUrl).then(function(load){
	        $scope.menu = $appBakery.menu(); 
	        $scope.appTitle = load.info.name;
	    });
	};

	$scope.goTo = function(item){
		$state.transitionTo(item.id.toString() , {pageId:item.id.toString()});
	}

	$scope.init();

})
.controller('MobletController' , function($scope, $stateParams , $appBakery){
	
	$scope.init = function(){
	 	
	 	$scope.pageDefinitions = $appBakery.getPageDefinitions($stateParams.pageId);
	 	
	 	$scope.moblets = [];
	 	angular.forEach($scope.pageDefinitions.moblets, function(moblet){
	 		$scope.moblets.push(moblet.type.superClass + " - " + moblet.type.name);
	 	});

	 	console.log($scope.pageDefinitions);
	};

	$scope.init();


});


