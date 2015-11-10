/**
 * Created by ������ on 01.11.2015.
 */
(function(){
    'use strict';

    angular.module('app').controller('ProjectController',ProjectController);

    ProjectController.$inject = ["$scope", "Projects", "$cookies"];
    function ProjectController($scope, Projects, $cookies){
      if(!$cookies.get("login")){
        $(".menu").hide();

      }else{
        $(".authori").hide();
        $(".logined").show();
      }
      $scope.name = $cookies.get("name");
      $scope.surname = $cookies.get("surname");
        $scope.projects = Projects.query({"headmaster":$cookies.get("id")});

        $scope.add = function(){
          $scope.proj = {
            id : "",
            name : "",
            repository : ""
          };
            $('#myModal').modal('show');
        }

        $scope.update= function(proj){
          $scope.proj = {
            id : proj.id,
            name : proj.name,
            repository : proj.repository
          };
            $('#myModal').modal('show');
        }

        $scope.newProject = function(){

            if ($scope.proj.id==""){
              var Project = {
                  "name" : $scope.proj.name,
                  "repository" : $scope.proj.repository,
                  "headmaster" : $cookies.get("id")
              };
              var proj = new Projects(Project);
              proj.$save().then(function(item){
                  $scope.projects.push(item);
                  $("#myModal").modal('hide');
              },function(err){
                  alert(err);
              });
            } else{
              var proj = Projects.get({id: $scope.proj.id}, function(){
                proj.name = $scope.proj.name;
                proj.repository = $scope.proj.repository;
                proj.$save().then(function(res){
                    $("#myModal").modal('hide');
                    $scope.projects = Projects.query();
                });
            });
            }


        };

        $scope.delete = function (proj, $index) {
        if (!confirm("Дейтсвительно хотите удалить?")) return;
                proj.$remove().then(function(){
                    $scope.projects.splice($index,1);
                });
        };
    }
})();
