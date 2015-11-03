/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            name : req.param('name'),
            repository : req.param('repository')
        };

        Projects.create(elem).exec(function (err) {
            if (err) { console.log(err); return res.send(500);}
            req.session.auth = true;
            res.redirect('/');
        });
    }
};

