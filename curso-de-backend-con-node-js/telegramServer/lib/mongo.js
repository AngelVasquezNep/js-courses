const db = require('mongoose');
const config = require('../utils/config');

const Logger = require('../utils/logger');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const CLUSTERS = "cluster0-shard-00-00.cohhe.mongodb.net:27017,cluster0-shard-00-01.cohhe.mongodb.net:27017,cluster0-shard-00-02.cohhe.mongodb.net:27017"
const MONGO_OPTIONS = 'ssl=true&replicaSet=atlas-naxsv2-shard-0&authSource=admin&retryWrites=true&w=majority'

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${CLUSTERS}/${DB_NAME}?${MONGO_OPTIONS}`;

db.Promise = global.Promise;

db.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        Logger.db.info('connected', 'Success')
    })
    .catch((err) => {
        Logger.db.error('connection error', err);
        process.exit(1);
    });

module.exports = db;
