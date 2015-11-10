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
      $scope.getTimeDif =function f(start, end) {
               var diff = moment(end).diff(moment(start));
               var duration = moment.duration(diff);
               return duration

           }
      $scope.name = $cookies.get("name");
      $scope.surname = $cookies.get("surname");
      $scope.tasks = Tasks.query();
      $scope.changePer = function(){
        $(".pers").slideToggle(300);
      }


      $scope.add = function(){

          $('#myModal').modal('show');

      }
      $scope.save = function(){

          var tas = {
              title : $scope.task.title,
              description: $scope.task.description,
              author: $cookies.get("id"),
              starttime: $scope.task.clockIn,
              endtime: $scope.task.clockOut,
              proj: $scope.task.project
          };
          console.log($scope.task.clockIn);
          var task= new Tasks(tas);

  console.log(task);
          task.$save().then(function(item){
              $scope.tasks.push(item);
              $("#myModal").modal('hide');
          },function(err){
              console.log(err);
          });
        /*else{
          var proj = Projects.get({id: $scope.proj.id}, function(){
            proj.name = $scope.proj.name;
            proj.repository = $scope.proj.repository;
            proj.$save().then(function(res){
                $("#myModal").modal('hide');
                $scope.projects = Projects.query();
            });
        });
      } */
      }
    }

})();
