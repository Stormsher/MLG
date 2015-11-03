/**
 * Created by Виктор on 01.11.2015.
 */
(function(){
    'use strict';

    angular.module('app').controller('ProjectController',ProjectController);

    ProjectController.$inject = ["$scope", "Projects"];
    function ProjectController($scope, Projects){

        $scope.projects = Projects.query();

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