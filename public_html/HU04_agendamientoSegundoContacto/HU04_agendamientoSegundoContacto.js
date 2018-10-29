/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module("RGESE.HU04_agendamientoSegundoContacto", ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/HU04_agendamientoSegundoContacto', {
                    templateUrl: 'HU04_agendamientoSegundoContacto/HU04_agendamientoSegundoContacto.html',
                    controller: 'HU04_agendamientoSegundoContactoCtrl'
                });
            }])
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        })

        .controller("HU04_agendamientoSegundoContactoCtrl", ['$scope',
            function ($scope, cfpLoadingBar) {
                /**
                 * Aquí va toda la logica de la vista:
                 * 
                 * 1. Declaracion de variables
                 * 2. Funcionalidad
                 * 3. Consumo de servicios REST
                 */
                $scope.test = "Hola mundo";
                $scope.functionTest = function () {
                    $scope.test = $scope.variableDiego;
                };
            }]);


