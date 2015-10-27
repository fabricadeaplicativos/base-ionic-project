/*
*  This is the universo module, in here is where 
*  all the integration with universo plataform 
*  happens. 
*  creator: @leualemax
*/

var universo = angular.module('Universo', []);

universo.factory('$appBakery' , function($http , $q , $localStorage){
	return {
		load:function(uri){

			//create promise 
			var deferred = $q.defer();

			//get from json api
			$http.get(uri)
			.success(function(data){
				console.log(data);
				$localStorage['app-json'] = data;  
				deferred.resolve(data);
			})
			.error(function(error){
				deferred.resolve(error);
			});

			return deferred.promise;
		},
		menu: function(){
			var appJson = $localStorage['app-json'],
				menu = [];

			angular.forEach(appJson.pages , function(page){
				menu.push({
					title:page.name,
					icon:page.icon,
					id:page.page_id,
					route:'/#/'+page.id+"/"+page.id
				});
			});

			return menu;
		},
		routes: function( appJson ,  $stateProvider){

			var appJson = appJson || $localStorage['app-json'];
			
			angular.forEach(appJson.pages , function(page){
				$stateProvider 
		          .state(page.id.toString(), {
		            url: '/'+page.id+"/:pageId",
		            templateUrl: 'views/moblet-default-view.html',
		            controller: 'MobletController'
		          });
		    });

		},
		getPageDefinitions: function(id){
			var pageDefinitions = _.find($localStorage['app-json'].pages, function(item){
				return item.page_id.toString() === id;
			})

			return pageDefinitions;
		}
	}
});