/**
 * Created by Виктор on 01.11.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .factory('Projects', Projects);

    Projects.$inject = ["$resource"];
    function Projects($resource){
        return $resource('Projects/:id', {id: '@id'});
    };

})();