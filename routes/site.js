exports.index = function(req, res){  
  res.render('index', {title:''});
};
exports.photos = function(req, res){
  res.redirect('');
};
exports.error = function(req, res){
  res.render('404', {title: 'You Dun Fd Up' });
};
