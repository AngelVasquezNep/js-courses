const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router) // router ALWAYS goes to the end of "use" handles

router.get('/', (req, res) => {
    res.send('Hola');
});

router.post('/', (req, res) => {
  console.log(req.query)
  console.log(req.body)
  res.send('El post');
});

app.listen(PORT, () =>
    console.log(`> App is ready at http://localhost:${PORT}`)
);
