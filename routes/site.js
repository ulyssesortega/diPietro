exports.index = function(req, res){  
  res.render('index');
};
exports.error = function(req, res){
  res.render('404', {title: 'You Dun Fd Up' });
};
