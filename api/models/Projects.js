/**
* Projects.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


var Projects = {
  attributes: {
    name: {type: 'string'},
    repository: {type: 'string'},
    headmaster : {type: 'string'}
  }
};

module.exports = Projects;
