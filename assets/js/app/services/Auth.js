/**
 * Created by Виктор on 03.11.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .factory('Auth', Auth);

    Auth.$inject = ["$resource"];
    function Auth($resource){
        return $resource('Users/auth', {});
    };

})();