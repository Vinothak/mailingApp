const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
  
    service: 'Gmail',
    auth:{
      user: 'vinothak1220@gmail.com',
      pass: 'LastUpdated@01'
    }
  
});

let sender='vinothak1220@gmail.com';
let receiver='vinothak12220@gmail.com';
var mailOptions={

  from:sender,
  to:receiver,
  subject: "Node Email",
  text: "This is a messsage from node J test 3"
};

transporter.sendMail(mailOptions,function(err,info){
  if(err){
    console.log(err);
  }
  else{
    console.log("Email was sent successfully");
  }
});


