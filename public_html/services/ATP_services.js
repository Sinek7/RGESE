/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module("services.ATP_services",['ngResource'])
        .factory("ATP_services", ['$resource', 'URL_API', function ($resource, URL_API) {

                return $resource(URL_API, {}, {
                    getArrayTrue: {
                        method: "GET",
                        isArray: true
                    },
                    getArrayFalse: {
                        method: "GET",
                        isArray: false
                    }
                });
            }]);