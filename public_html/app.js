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
<<<<<<< HEAD
    'RGESE.home',
    'RGESE.HU03_primerContacto',
    'RGESE.HU04_agendamientoSegundoContacto'
    
=======
    'RGESE.verificarCitaCiudadano',
    'RGESE.solicitarCita',
    'RGESE.primerContacto'
>>>>>>> 6968bfd2eece09c3aa2e067abb29aa30150bc35f
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/verificarCitaCiudadano' });
    }])

    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.includeBar = true;
    })
    
    .controller("rootCtrl", ['$scope', function ($scope, cfpLoadingBar) {
        
    }]);

