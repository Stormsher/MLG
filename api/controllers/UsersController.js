/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

     create: function (req, res) {
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
    }


};
