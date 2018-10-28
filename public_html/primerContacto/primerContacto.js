/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module("RGESE.primerContacto", ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/primerContacto', {
                    templateUrl: 'primerContacto/primerContacto.html',
                    controller: 'primerContactoCtrl'
                });
            }])
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        })

        .controller("primerConactoCtrl", ['$scope',
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


