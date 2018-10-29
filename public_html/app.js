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
    'RGESE.solicitarCita',
    'RGESE.primerContacto',
    'RGESE.agendamientoSegundoContacto'

])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/solicitarCita'});
    }])

    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.includeBar = true;
    })
    
    .controller("rootCtrl", ['$scope', function ($scope, cfpLoadingBar) {
        
    }]);

