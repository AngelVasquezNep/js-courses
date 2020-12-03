/**
 * To get access to envs variables
 * @param {String} name - ENV name
 */
function config(name) {
    return process.env[name];
}

module.exports = config;
