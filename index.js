let express = require('express');
var app =  express();

app.post('/mail', (req, res) => {
    console.log("Got a req on mail!");
    res.send("Duh hello world");
});

app.listen(5000, () => {
    console.log("API running on port 5000");
});
