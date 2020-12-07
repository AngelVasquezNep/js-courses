const path = require('path');

function getFileName(originalFileName) {
    if (originalFileName.includes('.')) {
        const [ext, ...fileName] = originalFileName.split('.').reverse();
        const extname = path.extname(originalFileName)

        return [fileName.join('-'), extname];
    }

    return [originalFileName, null];
}

function getHashedFileName(originalFileName) {
    const [fileName, ext] = getFileName(originalFileName);

    return `${fileName}-${Date.now()}${ext}`;
}

module.exports = {
    getFileName,
    getHashedFileName,
};
