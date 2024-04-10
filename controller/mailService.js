const nodemailer = require('nodemailer');


module.exports={
    mailer:(data)=>{
    
        console.log("mailer", String(data))
        let text =JSON.stringify(data)
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chuohanshivam3@gmail.com',
                pass: 'uuqsisvnsmvsfvyc'
            }
        });

        let mailDetails = {
            from: 'chuohanshivam3@gmail.com',
            to: data.email,
            subject: "subject",
            text: text
        };

        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs',err);
            } else {
                console.log('Email sent successfully');
            }
        });

    }
}