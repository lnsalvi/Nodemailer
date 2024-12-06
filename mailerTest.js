import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false, // use SSL
  port: 25, // port for secure SMTP
  auth: {
    user: 'salvipablo@gmail.com',
    pass: 'puqx hzld nbeg brzy'
  },
  tls: {
    rejectUnauthorized: false
  }
})

export async function sendMailNodeMailer(mailOptions) {

  try {
    const sendMail = await transporter.sendMail(mailOptions)
    console.log(sendMail.accepted)
  } catch (error) {
    console.log(error);
  }

}

      // if (!error) console.log('Correo enviado', info.response)
      // console.log(error)
