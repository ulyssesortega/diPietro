exports.index = function(req, res){  
  res.render('index');
};
exports.educators = function(req, res){
  res.render('educators');
};
exports.contact = function(req, res){
  res.render('contact');
};exports.about = function(req, res){  
  res.render('about');
};
exports.classes = function(req, res){  
  res.render('classes');
};
exports.faq = function(req, res){
  res.render('faq');
};
exports.insalon = function(req, res){
  res.render('insalon');
};
exports.cut = function(req, res){
    res.render('cut');
};
exports.etc = function(req, res){
    res.render('etc');
};
exports.color = function(req, res){
    res.render('color');
};

exports.error = function(req, res){
  res.render('404', {title: 'You Dun Fd Up' });
};
