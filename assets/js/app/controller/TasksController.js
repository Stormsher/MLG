/**
 * Created by Виктор on 02.11.2015.
 */
(function(){
    'use strict';

    angular.module('app').controller('TasksController',TasksController);

    TasksController.$inject = ["$scope", "Tasks"];
    function TasksController($scope, Projects){

        $scope.projects = Tasks.query();

        $scope.newProject = function(){
            var Project = new Projects({
                name : $scope.project.name,
                repository : $scope.project.repository
            });
            Project.$save().then(function(){
                alert();
            },function(err){
                alert(err);
            });
        };
    }

})();