/**
 * Created by Виктор on 27.10.2015.
 */
(function(){
    'use strict';

    angular.module('app').controller('LoginController',LoginController);

    LoginController.$inject = ["$scope", "Users", "Auth", "$http"];
    function LoginController($scope, Users, Auth, $http){
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

                console.log(register);
                Users.register().then(function () {
                    alert("");
                });
            }

        };

        $scope.auth = function(){
            $http.get('/users/auth', {username: $scope.user.login, password: $scope.user.pass}).then(
                function (data){
                    console.log(data);
                },function(err){
                    console.log(err);
                });
        }




    }
})();