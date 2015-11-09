/**
 * TasksController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            title: req.param('title'),
            description: req.param('description'),
            author: req.param('author'),
            status: req.param('status'),
            endtime: req.param('endtime'),
            proj : req.param('proj')


        };

        Projects.create(elem).exec(function (err) {
            if (err) { console.log(err); return res.send(500);}
            req.session.auth = true;
            res.redirect('/');
        });
    }
};
