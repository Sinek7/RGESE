/**
 * Controller for instantiate process in BonitaSoft
 * @Author henry.monroy
 **/
'use strict';
angular.module("demo.login", ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'login/login.html',
                    controller: 'loginCtrl'
                });
            }])
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        })

        .controller("loginCtrl", ['$scope', 'ATP_services',
            function ($scope, ATP_services, cfpLoadingBar) {
                /* Parameters declaration*/
                $scope.parameters = {};
                
                $scope.getParameters = function () {
                    ATP_services.getArrayFalse({},
                            function (success) {
                                $scope.parameters = success;
                                console.log("Success parameters! " + JSON.stringify($scope.parameters));
                            },
                            function (error) {
                                console.log("Error parameters! " + JSON.stringify(error));
                            });
                };
                
                /* Variables Business*/
                $scope.person={};
                
                /* REST Services*/
                $scope.login=function(){
                    /*
                     * Construir objeto para login.
                     * Si el usuario existe en DB, direccionar a vista inforRequest
                     * Si el usuario NO existe en DB, direccionar a vista signIn
                     */
                    $scope.person.typePerson=$scope.typePerson.id;
                    $scope.person.typePersonId=$scope.typePersonId.id;
                    $scope.person.typeService=$scope.typeService.id;
                    
                    console.log("typePerson "+ JSON.stringify($scope.person.typePerson));
                    console.log("typePersonId "+ JSON.stringify($scope.person.typePersonId));
                    console.log("PersonId "+ JSON.stringify($scope.person.personId));
                    console.log("typeService "+ JSON.stringify($scope.person.typeService));
                };


            }]);