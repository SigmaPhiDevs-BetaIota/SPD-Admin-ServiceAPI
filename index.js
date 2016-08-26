let express = require('express');
var app =  express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/mail', (req, res) => {
	console.log("Got mail req");
	console.log(req.body.name);
	console.log(req.body.email);
	console.log(req.body.message);
	res.end("Hello");
});

app.get('/', (req, res) => {
	res.end("<h1>Hi</h1>");
});

app.listen(5000, () => {
    console.log("API running on port 5000");
});
