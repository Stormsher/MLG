/**
 * Created by Виктор on 27.10.2015.
 */
(function(){
    'use strict';

    angular.module('app',[
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'ngMdIcons',
        'angularFileUpload'
    ]).config(appConfig);

    appConfig.$inject = ["$routeProvider"];
    function appConfig($routeProvider){
        $routeProvider
            .when('/login',{
                templateUrl: 'view/login.html',
                controller: 'LoginController'
            })
            .when('/index',{
                templateUrl: 'view/index.html',
                controller: 'IndexController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }

})();