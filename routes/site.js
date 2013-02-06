exports.index = function(req, res){  
  res.render('index');
};
exports.about = function(req, res){  
  res.render('about');
};
exports.classes = function(req, res){  
  res.render('classes');
};
exports.error = function(req, res){
  res.render('404', {title: 'You Dun Fd Up' });
};
