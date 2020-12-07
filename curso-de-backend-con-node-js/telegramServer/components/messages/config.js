const { apiBaseUrl, publicFilesPath } = require('../../utils/config');

const FILES_PATH = "files"
const SAVED_FILES_URL = `${apiBaseUrl}/${publicFilesPath}/${FILES_PATH}`;

module.exports = {
    FILES_PATH,
    SAVED_FILES_URL,
};
