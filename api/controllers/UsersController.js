/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passwordHash = require('password-hash');

module.exports = {

    register: function (req, res) {
        var elem = {
            username : req.param('username'),
            password : req.param('password'),
            name: req.param('name'),
            surname: req.param('surname'),
            email: req.param('email'),
            avatar: req.param('avatar'),
            city: req.param('city'),
            day: req.param('day'),
            month: req.param('month'),
            year: req.param('year'),
            stat: req.param('stat')
        };
        Users.create(elem).exec(function (err, user) {
            if (err) { console.log(err); return res.send(500);}
            req.session.auth = true;
            res.redirect('/');
        });
    },


    auth: function (req, res) {

        var username = req.param('username'),
            password = req.param('password');

        if (!username || !password) {
            return res.send(500);
        };

        Users.findOneByUsername(username).exec(function (err, user) {
            if (!user || err) return res.send(500);
           if (passwordHash.verify(password, user.encryptPassword)) {
               req.session.auth = true;
               req.session.User = user;

               return res.user;

           }else{return res.send(500);};
        });
    },

    destroy: function (req, res) {
        User.findOne(req.session.User.id).exec(function (err, user) {
            if (user) {
                req.session.destroy();
                res.redirect('/');
            } else { res.redirect('/login'); };
        });
    }



};

