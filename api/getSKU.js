const request = require('request');
const conf = require('./config');
const procSKU = require('./procSKU');

module.exports = (app,storage) => {
  app.get('/transactions/:sku',(req,res) => {
    console.log(conf.messages.skuProcessing);
    procSKU(req,res,storage,conf);
  });
}
