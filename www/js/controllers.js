angular.module('starter')
.controller('HomeController' , function($scope, $rootScope, $appBakery , AppUrl , $state){

	$scope.init = function(){
		$rootScope.$on('app-json::loaded', function(){
	        $scope.menu = $appBakery.menu(); 
	        $scope.appTitle = $appBakery.info().name;
	    });
	};

	$scope.goTo = function(item){
		$state.transitionTo(item.id.toString() , {pageId:item.id.toString()});
	}

	$scope.init();

})
.controller('MobletController' , function($scope, $stateParams , $appBakery){
	
	$scope.moblets = {
		usimple: {
			active:false,
			url:""
		},
		ulist:{
			active:false,
			url:""
		}
	};

	$scope.init = function(){
	 	
	 	$scope.pageDefinitions = $appBakery.getPageDefinitions($stateParams.pageId);
	 	
	 	$scope.moblets_list = [];
	 	
	 	angular.forEach($scope.pageDefinitions.moblets, function(moblet){
	 		switch(moblet.type.superClass){
	 			case 'usimple' : 
	 				$scope.moblets.usimple.active = true;
	 				$scope.moblets.usimple.url = moblet.type.url;
	 				break;
	 			case 'ulist' : 
	 				$scope.moblets.ulist.active = true;
	 				$scope.moblets.ulist.url = moblet.type.proxy;
	 				$scope.moblets.ulist.code = moblet.instance.id;
	 				break;
	 		}
	 		$scope.moblets_list.push(moblet.type.superClass + " - " + moblet.type.name);
	 	});

	 	console.log($scope.pageDefinitions);

	};

	$scope.init();


});


