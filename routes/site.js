exports.index = function(req, res){  
  res.render('index');
};
exports.about = function(req, res){  
  res.render('about');
};
exports.classes = function(req, res){  
  res.render('classes');
};
exports.educators = function(req, res){  
  res.render('educators');
};
exports.culture = function(req, res){  
  res.render('culture');
};
exports.saloned = function(req, res){  
  res.render('saloned');
};
exports.contact = function(req, res){  
  res.render('contact');
};
exports.error = function(req, res){
  res.render('404', {title: 'You Dun Fd Up' });
};
