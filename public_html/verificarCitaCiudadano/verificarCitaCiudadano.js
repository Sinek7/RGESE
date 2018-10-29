/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module("RGESE.verificarCitaCiudadano", ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/verificarCitaCiudadano', {
                    templateUrl: 'verificarCitaCiudadano/verificarCitaCiudadano.html',
                    controller: 'verificarCitaCiudadanoCtrl'
                });
            }])        
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        })

        .controller("verificarCitaCiudadanoCtrl", ['$scope',
            function ($scope, cfpLoadingBar) {
                
                $scope.seccion1=false;            
                $scope.seccion2=false;            
                
                $scope.cita={};
                $scope.cita.idCiudadano="12345";
                $scope.cita.fecha="28/10/2018";
                $scope.cita.franja="13:00 - 13:30";
                
                $scope.verificarAgenda=function(idCiudadano){
                    if(idCiudadano==="12345"){
                        $scope.seccion1=true;
                        $scope.seccion2=false;
                    }else{
                        $scope.seccion1=false;
                        $scope.seccion2=true;
                    }
                };
                        

            }]);


