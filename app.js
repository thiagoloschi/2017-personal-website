var site = angular.module('site',['ngRoute']);

site.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'mainController'
    })
    .otherwise({
		redirectTo: '/'
	});
});
