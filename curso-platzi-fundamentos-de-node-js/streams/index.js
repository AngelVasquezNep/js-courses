const fs = require("fs");
const createBigFile = require("./createBigFile");

const fileName = "big-file.txt";

function readBigFile() {
  console.log("readBigFile");
  let data = "";
  let readableStream = fs.createReadStream(__dirname + `/${fileName}`);

  // readableStream.setEncoding("UTF8");
  // Con esto el chunk que se recibe llega en formato texto
  // Si no se lo ponemos, el chunk es un buffer.

  readableStream.on("data", (chunk) => {
    console.log("Cargando... ", chunk.length);
    data += chunk;
  });

  readableStream.on("end", () => {
    console.log("FINISHED");
  });
}

fs.writeFile(__dirname + `/${fileName}`, "", (error) => {
  if (!error) {
    console.log("Init");
    createBigFile()
      .then(readBigFile)
      .catch((error) => console.error(error));

    return;
  }

  console.error(error);
});
