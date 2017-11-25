var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.post('/', handleSayHello);

var mailOptions = {
  from: 'mtsaweb13579@gmail.com', // sender address
  to: 'wangtiffany@gmail.com', // list of receivers
  subject: 'Email Example', // Subject line
  text: "asdasdasadsasdsasdasd" //, // plaintext body
};


function handleSayHello(req, res) {
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
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });

}


module.exports = router;
