const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.send("test");

});

app.listen(3000);