var data = require('../dummy.json');

exports.view = function(req, res){
  res.render('home', data);
};
