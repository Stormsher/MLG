/**
* Tasks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


var Tasks = {
  attributes: {
    title: {type: 'string'},
    description: {type: 'string'},
    author: {type: 'string'},
    status: {type: 'string'},
    endtime: {type: 'date'},
    proj : {type: 'string'}
  }
};

module.exports = Tasks ;
