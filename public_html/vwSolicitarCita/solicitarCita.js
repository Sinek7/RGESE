/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module("RGESE.solicitarCita", ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/solicitarCita', {
                    templateUrl: 'vwSolicitarCita/solicitarCita.html',
                    controller: 'solicitarCitaCtrl'
                });
            }])
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        })

        .controller("solicitarCitaCtrl", ['$scope',
            function ($scope, cfpLoadingBar) {
                $scope.parametros = {};
                $scope.parametros.franjas = [
                    {"id": 0, "franja": "8:00 - 8:30"},
                    {"id": 1, "franja": "8:30 - 9:00"},
                    {"id": 2, "franja": "9:00 - 9:30"},
                    {"id": 3, "franja": "9:30 - 10:00"},
                    {"id": 4, "franja": "10:00 - 10:30"},
                    {"id": 5, "franja": "10:30 - 11:00"},
                    {"id": 6, "franja": "11:00 - 11:30"},
                    {"id": 7, "franja": "11:30 - 12:00"},
                    {"id": 8, "franja": "12:00 - 12:30"},
                    {"id": 9, "franja": "12:30 - 13:00"},
                    {"id": 10, "franja": "13:00 - 13:30"},
                    {"id": 11, "franja": "13:30 - 14:00"},
                    {"id": 12, "franja": "14:00 - 14:30"},
                    {"id": 13, "franja": "14:30 - 15:00"},
                    {"id": 14, "franja": "15:00 - 15:30"},
                    {"id": 15, "franja": "15:30 - 16:00"},
                    {"id": 15, "franja": "16:00 - 16:30"},
                    {"id": 15, "franja": "16:30 - 17:00"}
                ];
                $scope.parametros.clavs = [
                    {"id": 0, "nombre": "CLAV SUBA"},
                    {"id": 1, "nombre": "CLAV CHAPINERO"},
                    {"id": 2, "nombre": "CLAV RAFAEL URIBE"},
                    {"id": 3, "nombre": "CLAV KENNEDY - SEVILLANA"},
                    {"id": 4, "nombre": "CLAV KENNEDY - PATIO BONITO"},
                    {"id": 5, "nombre": "CLAV BOSA"},
                    {"id": 6, "nombre": "CLAV CIUDAD BOLIVAR"},
                    {"id": 7, "nombre": "PUNTO DE ATENCIÓN TERMINAL"},
                    {"id": 8, "nombre": "PUNTO DE ATENCIÓN SUPERCADE ENGATIVÁ"}
                ];

                $scope.seccion1 = false;
                $scope.seccion2 = false;
                $scope.seccion3 = false;

                $scope.cita = {};
                $scope.cita.idCiudadano = "12345";
                $scope.cita.fecha = "28/10/2018";
                $scope.cita.franja = "13:00 - 13:30";

                $scope.limpiar = function () {
                    $scope.seccion1 = false;
                    $scope.seccion2 = false;
                    $scope.seccion3 = false;
                    
                    $scope.idCiudadano = undefined;
                    $scope.celular = undefined;                    
                    $scope.horaCita = undefined;
                    $scope.fechaCita = undefined;
                    $scope.clav = undefined;
                };

                $scope.consultarCiudadano = function () {
                    if ($scope.idCiudadano === "12345") {
                        $scope.seccion1 = true;
                        $scope.seccion2 = false;
                        $scope.seccion2 = false;
                    } else if($scope.idCiudadano === "67890"){
                        $scope.seccion1 = false;
                        $scope.seccion2 = false;
                        $scope.seccion3 = true;
                    }else {
                        $scope.seccion1 = false;
                        $scope.seccion2 = true;
                        $scope.seccion3 = false;
                    }
                };
                
                $scope.agendarCita=function(){
                    let cita={};
                    cita.idCiudadano=$scope.idCiudadano;
                    cita.celular=$scope.celular;
                    cita.clav=$scope.clav.nombre;
                    cita.fechaCita=$scope.fechaCita.toString();
                    cita.horaCita=$scope.horaCita.franja;
                    
                    console.log("CITA: "+JSON.stringify(cita));
                };
                
                $scope.cancelarCita=function(){
                    console.log("SE CANCELÓ LA CITA");
                };

            }]);


