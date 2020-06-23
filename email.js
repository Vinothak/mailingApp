const nodemailer=require("nodemailer");
const express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sender;
var receiver;
var message;

app.listen("3001", () => {
    console.log("Listening on port 3001");
  });

app.use(bodyParser());

app.get("/", function (req, res) {
    
    res.sendFile(__dirname + "/index.html");
  });

  app.post("/mail", function (req, res) {

    const obj=req.body;
    sender=obj.sender;
    receiver=obj.receiver;
    message=obj.message;
    console.log(`sender is ${sender} and receiver is ${receiver} and text is${message}`);

    
    const transporter=nodemailer.createTransport({
  
        service: 'Gmail',
        secure: true,
        auth:{
          user: 'vinothak1220@gmail.com',
          pass: 'your password here'
        }
      
    });
    //mail details sender and receiver
    var mailOptions={

        from:sender,
        to:receiver,
        subject: "Node Email",
        text: message

      };
    //sending mail now
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
          console.log(err);
        }
        else{
          console.log("Email was sent successfully");
        }
      });

    res.send("mail sent sucessfully");
  });












