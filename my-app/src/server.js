const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Received request for /');
    res.send('Hello World!');
})

app.listen(3000);
