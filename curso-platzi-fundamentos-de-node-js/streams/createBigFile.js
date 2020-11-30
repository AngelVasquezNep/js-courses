const fs = require("fs");
const { exec } = require("child_process");

/**
 * To create a 600M file
 */
function createBigFile() {
  return new Promise((resolve, reject) => {
    let text = "";

    for (let i = 0; i < 10000000; i++) {
      text += `Hello world \n`;
    }

    fs.writeFile(__dirname + "/big-file.txt", text, { flag: "a+" }, (error) => {
      if (error) {
        throw new Error(error);
      }
    });

    exec("ls -lha", (err, stdout, stderr) => {
      console.info(stdout);
      resolve();
    });
  });
}

function main() {
  return createBigFile()
    .then(createBigFile)
    .then(createBigFile)
    .then(createBigFile)
    .catch((error) => {
      console.error("UPS");
      console.error(error);
    });
}

module.exports = main;
