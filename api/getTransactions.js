const request = require('request');
const conf = require('./config');
const sendPersistData = require('./sendPersistData');

module.exports = (app,storage) => {
  app.get('/transactions',(req,res) => {
    request(conf.getTransOpts, (error,response,body) => {
      if (error) {
        console.log(conf.messages.remoteSvrNA + error.code);
        sendPersistData(res,storage,'transactions',conf);
      } else {
        console.log(conf.messages.responseCode + response.statusCode);
        if (response.statusCode === 200) {
          let json = JSON.parse(body);
          storage.setItemSync('transactions',json);
          res.send(json);
        } else {
          console.log(conf.messages.badResponseCode);
          sendPersistData(res,storage,'transactions',conf);
        }
      }
    });
  });
}
