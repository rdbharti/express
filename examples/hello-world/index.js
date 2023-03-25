'use strict'

var express = require('../../');

var app = module.exports = express()

app.get('/', function(req, res){

  res.send('This is pushing the image');

});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
