/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module("RGESE.solicitarCita", ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/solicitarCita', {
                    templateUrl: 'solicitarCita/solicitarCita.html',
                    controller: 'solicitarCitaCtrl'
                });
            }])        
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        })

        .controller("solicitarCitaCiudadanoCtrl", ['$scope',
            function ($scope, cfpLoadingBar) {
                $scope.parametros={};
                $scope.parametros.franjas=[
                    {"id":0,"franja":"8:00 - 8:30"},
                    {"id":1,"franja":"8:30 - 9:00"},
                    {"id":2,"franja":"9:00 - 9:30"},
                    {"id":3,"franja":"9:30 - 10:00"},
                    {"id":4,"franja":"10:00 - 10:30"},
                    {"id":5,"franja":"10:30 - 11:00"},
                    {"id":6,"franja":"11:00 - 11:30"},
                    {"id":7,"franja":"11:30 - 12:00"},
                    {"id":8,"franja":"12:00 - 12:30"},
                    {"id":9,"franja":"12:30 - 13:00"},
                    {"id":10,"franja":"13:00 - 13:30"},
                    {"id":11,"franja":"13:30 - 14:00"},
                    {"id":12,"franja":"14:00 - 14:30"},
                    {"id":13,"franja":"14:30 - 15:00"},
                    {"id":14,"franja":"15:00 - 15:30"},
                    {"id":15,"franja":"15:30 - 16:00"},
                    {"id":15,"franja":"16:00 - 16:30"},
                    {"id":15,"franja":"16:30 - 17:00"}
                ];
                
            }]);


