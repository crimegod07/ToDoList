const mongoose = require('mongoose');

//connecting in development environment
mongoose.connect('mongodb://localhost/toDo_List');
const db= mongoose.connection;

db.on('error', console.error.bind(console, 'error  connecting to mongodb'));


db.once('open', function(){
    console.log("connected to Database :: MongoDB");
});

module.exports = db;