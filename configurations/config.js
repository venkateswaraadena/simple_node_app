const mongoose = require('mongoose');
const configValues = require('./const');

let dev_db_url = configValues.dev_db_url;

let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));