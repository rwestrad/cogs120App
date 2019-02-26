var data = require('../dummy.json');

exports.view = function(req, res){
  data['viewAlt'] = false;
  res.render('home', data);
};

exports.viewAlt = function(req, res){
  data['viewAlt'] = true;
  res.render('home', data);
}
