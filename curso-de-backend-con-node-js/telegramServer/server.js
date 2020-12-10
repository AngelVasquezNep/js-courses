const express = require('express');
const cors = require('cors')
const config = require('./utils/config');
const app = express();

const server = require('http').Server(app);

const socket = require('./socket');

const bodyParser = require('body-parser');
const MongoDB = require('./lib/mongo');
const requestLogger = require('./lib/middlewares/requestLogger');

const router = require('./network/routes');

const PORT = config.PORT;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

socket.connect(server);

router(app);

app.use(`/${config.publicFilesPath}`, express.static('public'));

server.listen(PORT, () =>
    console.log(`> App is ready at http://localhost:${PORT}`),
);
