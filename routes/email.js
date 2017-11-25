var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.post('/', handleSayHello);


function handleSayHello(req, res) {
  var mailOptions = {
    from: 'mtsaweb13579@gmail.com', // sender address
    to: 'wangtiffany@gmail.com', // list of receivers
    subject: "From:" + req.body.email + " --- " + req.body.subject, // Subject line
    text: req.body.text //, // plaintext body
  };

  // Not the movie transporter!
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mtsaweb13579@gmail.com', // Your email id
      pass: 'mtsa.team' // Your password
    }
  });

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({email: "error"});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({email: info.response});

    };
  });
}

module.exports = router;
