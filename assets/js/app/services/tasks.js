/**
 * Created by Виктор on 07.11.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .factory('Tasks', Tasks);

    Tasks.$inject = ["$resource"];
    function Tasks($resource){
        return $resource('Tasks/:id', {id: '@id'});
    };

})();