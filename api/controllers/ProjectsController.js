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
            repository : req.param('repository'),
            headmaster : req.param('headmaster')
        };

        Projects.create(elem).exec(function (err) {
            if (err) {return res.send(500);}else{ return res.ok();}
        });
    },

    update: function (req, res){
        var id =  req.param('id');

        var elem = {
          name : req.param('name'),
          repository : req.param('repository'),
          headmaster : req.param('headmaster')
        };

        Projects.update(id, elem).exec(function (err) {
            if (err) {return res.send(500);}else{ return res.redirect('/');}
        });
    }


};
