var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/dbusers');
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.createConnection(uri, { useNewUrlParser: true });