const colors = require('colors')

class Logger {
    constructor(type) {
        this.type = type;
    }

    error(subType, error) {
        console.error(`[${this.type}-${subType || ''}][${new Date()}]`.magenta);
        console.error(error);
    }

    info(subType, info) {
        console.info(`[${this.type}-${subType || ''}][${new Date()}]`.cyan);
        console.info(info);
    }
}

const controller = new Logger('controller');
const db = new Logger('DB');

module.exports = {
    Logger,
    controller,
    db,
};
