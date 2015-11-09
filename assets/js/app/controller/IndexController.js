/**
 * Created by ������ on 27.10.2015.
 */
(function(){
    'use strict';

    angular.module('app').controller('IndexController',IndexController);

    IndexController.$inject = ["$scope", "Users", "Auth", "$http", "$cookies"];
    function IndexController($scope, Users, Auth, $http, $cookies){


      if(!$cookies.get("login")){
        $(".menu").hide();

      }else{
        $(".authori").hide();
        $(".logined").show();
      }
      $scope.name = $cookies.get("name");
      $scope.surname = $cookies.get("surname");
      $scope.login={
          name:'',
          pass:''
      };

      $scope.register = function() {
          if ($scope.register.password !== $scope.checkpassword) {
              $("#omg").slideDown(300);
          } else {
              var register = new Users({
                  username: $scope.register.username,
                  password: $scope.register.password,
                  name: $scope.register.nameD,
                  surname: $scope.register.surname,
                  email: $scope.register.email,
                  city: $scope.register.city,
                  day: $scope.register.date.getDate(),
                  month: $scope.register.date.getMonth(),
                  year: $scope.register.date.getFullYear()
              });
              register.$save().then(function () {
                //  $cookies.put('myFavorite', 'oatmeal');
              });
          }

      };

      $scope.auth = function(){
          $http.get('/users/auth', {params : {username: $scope.user.login, password: $scope.user.pass}}).then(
              function (resp){
                  $cookies.put('id', resp.data.id);
                  $cookies.put('login', resp.data.username);
                  $cookies.put('name', resp.data.name);
                  $cookies.put('surname', resp.data.surname);

                  $(".menu").slideDown(300);
                  $('#myModal').modal('hide');
              },function(err){
                  console.log(err);
              });
      }


    }
})();
