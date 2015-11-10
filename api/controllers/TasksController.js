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
            starttime: req.param('starttime'),
            endtime: req.param('endtime'),
            proj : req.param('proj')
        };

        Tasks.create(elem).exec(function (err) {
            if (err) { console.log(err); return res.send(500);}
        });
    },
    remove : function (req,res){
      var elem = {
          id: req.param('id'),

      };

      Tasks.remove(elem).exec(function (err) {
          if (err) { console.log(err); return res.send(500);}
      });
    }
};
