let nmailer = require('nodemailer');
const fs = require('fs');


//Settare host, user, pass 

fs.writeFileSync('error.log', '')
let tra = nmailer.createTransport({
    host: "",
    auth: {
      user: "",
      pass: ""
    }
  });
//Settare from e sunject
  let mailopt = {
      from: '',
      to: ``,
      subject: '',
      html : `<html>

      <head></head>
      <body>
       
          
      </body>
  </html>
  
      `
  }
let countEmailSent = 0;
  const allFileContests = fs.readFileSync('emailf.txt','utf-8')
  allFileContests.split(/\r?\n/).forEach((line) =>{
        mailopt['to'] = line;
        setTimeout(() => {
         
            tra.sendMail(mailopt, (err, info) => {
                if(err){
                    console.log(err['response'])
                }else{
                    countEmailSent++;
                    console.log(`Email sent to: ${line} - Number${countEmailSent}`)
                    
                }
            })
        }, 500);
})
