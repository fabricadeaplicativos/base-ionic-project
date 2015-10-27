/*
*  This is the universo module, in here is where 
*  all the integration with universo plataform 
*  happens. 
*  creator: @leualemax
*/

var universo = angular.module('Universo', []);

universo.factory('$appBakery' , function($http , $q){
	return {
		load:function(uri){

			//create promise 
			var deferred = $q.defer();

			//get from json api
			$http.get(uri)
			.success(function(data){
				console.log(data);
				deferred.resolve(data);
			})
			.error(function(error){
				deferred.resolve(error);
			});

			return deferred.promise;
		},
		
	}
});