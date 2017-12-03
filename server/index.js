const express = require('express');

const app = express();

app.get('/greeting', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(5000);
