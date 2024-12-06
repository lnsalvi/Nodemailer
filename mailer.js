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

const mailOptions = {
  from: 'salvipablo@gmail.com',
  to: 'psalvi@semapi.com.ar',
  subject: 'Prueba nodemailer',
  text: 'Texto de prueba de nodemailer'
}

transporter.sendMail(mailOptions, (error, info) => {
  if (!error) console.log('Correo enviado', info.response)
  console.log(error)
})
