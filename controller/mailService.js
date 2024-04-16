const nodemailer = require('nodemailer');


module.exports={
    mailer:(data)=>{
    
        console.log("mailer", String(data))
        let text =JSON.stringify(data)
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'connect@mu20.co',
                pass: 'eazwzctjeajubuyy'
            }
        });

        let mailDetails = {
            from: 'chuohanshivam3@gmail.com',
            to: data.email,
            subject: "subject",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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