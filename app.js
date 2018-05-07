const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.send("<h1>test</h1>");

});

app.get('/hello', (req, res) => {
	res.send("<h1>Hello, JavaScript Developer</h1>");

});

app.listen(3000, () => {console.log('app is running on port 3000!');});