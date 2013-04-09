  var authorizenet = require('paynode').use('authorizenet');

  var client = authorizenet.createClient({
    level:authorizenet.levels.sandbox
    ,login:'5q2vbG7NnQ'
    ,tran_key:'9N5NR5t89576cGfn'
  })

  client.performAimTransaction({
    "x_type": "AUTH_CAPTURE",
    "x_method": "CC",
    "x_card_num": "4111111111111111",
    "x_exp_date": "0115",

    "x_amount": "19.99",
    "x_description": "Sample Transaction",

    "x_first_name": "John",
    "x_last_name": "Doe",
    "x_address": "1234 Street",
    "x_state": "WA",
    "x_zip": "98004"})
    .on('success', function(err, result){
      // do something to handle a successful transaction
    })
    .on('failure', function(err, result){
      // do something to handle a failed transaction
    })
