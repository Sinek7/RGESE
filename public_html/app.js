/**
 * Main controller 
 * @author henry.monroy
**/
'use strict';
angular.module("RGESE", [        
    'ngRoute',
    'ngResource',
    'angular-loading-bar',
    'ngAnimate',
    'services.ATP_services',
    'RGESE.home',
    'RGESE.primerContacto'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/home' });
    }])

    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.includeBar = true;
    })
    
    .controller("rootCtrl", ['$scope', function ($scope, cfpLoadingBar) {
        
    }]);

