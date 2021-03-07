const CreateRemoteDB = require('./remote');
const config = require('../config');

module.exports = new CreateRemoteDB(config.services.mysql.BASE_URL);
