// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic' , 'Universo' , 'Moblets' , 'ngStorage'])

.constant('AppUrl' , '/api/1.json') //dev
// .constant('AppUrl' , 'http://proxy.universo.mobi/applications/1.json') //prod


.config(function($stateProvider, $urlRouterProvider , $appBakeryProvider , AppUrl) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home-view.html',
      controller: 'HomeController'
    });

    var $appBakery = $appBakeryProvider.$get();

    $appBakery.load(AppUrl).then(function(load){
        $appBakery.routes(load , $stateProvider);
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
})
.run(function($ionicPlatform , $appBakery) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
