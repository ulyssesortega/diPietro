var authorizenet = require('paynode').use('authorizenet');
var client = authorizenet.createClient({
  level:authorizenet.levels.sandbox
  ,login:'5q2vbG7NnQ'
  ,tran_key:'9N5NR5t89576cGfn'
});
app.post('/checkout', function(req, res) {
  client.performAimTransaction({
    "x_type": "AUTH_CAPTURE",
    "x_method": "CC",
    "x_card_num": creditCard.value,
    "x_exp_date": creditExp.value,
  
    "x_amount": "19.99",
    "x_description": "Sample Transaction",
  
    "x_first_name": firstName.value,
    "x_last_name": lastName.value,
    "x_address": address1.value + address2.value,
    "x_state": clientState.value,
    "x_zip": clientZip.value
  });
    .on('success', function(err, result){
      // do something to handle a successful transaction
      console.log('transaction complete');
      res.render('educators');
    });
    .on('failure', function(err, result){
      // do something to handle a failed transaction
      console.log('transaction failed');
      res.render('/');
    }); 
  });