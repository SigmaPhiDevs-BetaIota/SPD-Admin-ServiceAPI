let express = require('express');
var app =  express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var nodemailer = require('nodemailer');

app.post('/mail', (req, res) => {
	var smtpTransport = getTransport();
	var mailOptions = {
		to: "colemalban@gmail.com",
		subject:"Mail from SigPhi Website: Sender "+req.body.name,
		text: req.body.message+" :Reply at "+req.body.email
	}
	smtpTransport.sendMail(mailOptions, function(error, resp){
		if(error){
			console.log(error);
		}
		else{
			console.log("Sent");
		}
	});
	res.end("status=MessageSent");
});

app.get('/', (req, res) => {
	res.end("<h1>Hi</h1>");
});

app.listen(5000, () => {
    console.log("API running on port 5000");
});

//Create  a mailer transport
function getTransport(){
	return smtpTransport = nodemailer.createTransport("SMTP", {
		service: "Gmail",
		auth: {
			user:"sigmaphideltawebmaster@gmail.com",
			pass:"betaiota"
		}
	});
}
