/**
 * Created by ������ on 27.10.2015.
 */
(function(){
    'use strict';

    angular.module('app',[
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'ngMdIcons',
        'ngCookies',
        'ui.bootstrap'
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
            .when('/tasks',{
                templateUrl: 'view/tasks.html',
                controller: 'TasksController'
            })
            .when('/project',{
                templateUrl: 'view/project.html',
                controller: 'ProjectController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }

})();
