let express = require('express');
var app =  express();

app.post('/mail', (req, res) => {
	console.log(req.body.name);
	console.log(req.body.email);
	console.log(req.body.message);
});

app.get('/', (req, res) => {
	res.end("<h1>Hi</h1>");
});

app.listen(5000, () => {
    console.log("API running on port 5000");
});
