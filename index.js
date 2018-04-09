const express   = require('express'),
      app       = express(),
      storage = require('./api/storage');

require('./appConfig')(app);
require('./server')(app);
require('./api/getRates')(app,storage);
require('./api/getTransactions')(app,storage);
require('./api/getSKU')(app,storage);
