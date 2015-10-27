/**
 * Created by Виктор on 28.10.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .factory('Users', Users);

    Users.$inject = ["$resource"];
    function Users($resource){
        return $resource('Users/:id', {id: '@id'});
    };

})();