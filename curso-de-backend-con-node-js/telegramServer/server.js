const express = require('express');

const app = express();

const PORT = 8000;

app.use('/', (req, res) => {
    res.send('Hola');
});

app.listen(PORT, () =>
    console.log(`> App is ready at http://localhost:${PORT}`)
);
