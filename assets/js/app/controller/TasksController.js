/**
 * Created by ������ on 02.11.2015.
 */
(function(){
    'use strict';

    angular.module('app').controller('TasksController',TasksController);

    TasksController.$inject = ["$scope", "Tasks", "$cookies"];
    function TasksController($scope, Tasks, $cookies){
      if(!$cookies.get("login")){
        $(".menu").hide();

      }else{
        $(".authori").hide();
        $(".logined").show();
      }
      $scope.name = $cookies.get("name");
      $scope.surname = $cookies.get("surname");
      $scope.tasks = Tasks.query();

      $scope.add = function(){
        $scope.proj = {
          id : "",
          name : "",
          repository : ""
        };
          $('#myModal').modal('show');
      }

    }

})();
