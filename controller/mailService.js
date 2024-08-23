const nodemailer = require('nodemailer');


module.exports={
    mailer:(data)=>{
    
        console.log("mailer", String(data))
        let text =JSON.stringify(data)
        let htmlContent = `
        <h3>New Form Entry at mu20.co</h3>
        <ul>
          ${Object.entries(data).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
        </ul>
      `;
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'connect@mu20.co',
                pass: 'eazwzctjeajubuyy'
            }
        });

        let mailDetails = {
            from: 'connect@mu20.co',
            to: 'connect@mu20.co',
            subject: "New Form Entry at mu20.co",
            html: htmlContent
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
