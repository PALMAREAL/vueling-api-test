const request = require('request');
const conf = require('./config');
const sendPersistData = require('./sendPersistData');

module.exports = (app,storage) => {
  app.get('/rates',(req,res) => {
    request(conf.getRatesOpts, (error,response,body) => {
      if (error) {
        console.log(conf.messages.remoteSvrNA + error.code);
        sendPersistData(res,storage,'rates',conf);
      } else {
        console.log(conf.messages.responseCode + response.statusCode);
        if (response.statusCode === 200) {
          let json = JSON.parse(body);
          storage.setItemSync('rates',json);
          res.send(json);
        } else {
          console.log(conf.messages.badResponseCode);
          sendPersistData(res,storage,'rates',conf);
        }
      }
    });
  });
}
