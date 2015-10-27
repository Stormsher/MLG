/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var passwordHash = require('password-hash');

var Users = {

  attributes: {

    username: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true, minLength: 5},
    name: {type: 'string',  minLength:3},
    surname: {type: 'string', minLength:3},
    email: {type: 'string', minLength:3},
    avatar: {type: 'string',minLength:3},
    city: {type: 'string', minLength:3},
    day: {type: 'int'},
    month: {type: 'int'},
    year: {type: 'int'},


    toJSON: function() {
      var element = this.toObject();
      delete element.password;
      return element;
    }

  },

  beforeCreate: function (values, next) {
    var mainPass = passwordHash.generate(values.password);
    values.encryptPassword = mainPass;
    next();
  }

};

module.exports = Users;

