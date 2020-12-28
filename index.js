const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.get('/', (request, response) => {
    response.status(200).send('Hello world!');
});

app.get('/data', (req, res) => {
    setTimeout(() => res.status(200).send('This data was loaded from my ass.'), 3000);
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}...`);
});