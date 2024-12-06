import { sendMailNodeMailer } from "./mailerTest.js"

// Intervalo de tiempo en milisegundos (ej. 1000 ms = 1 segundo)
const INTERVAL_MS = 30000; // Cambia esto al intervalo deseado

// Función que quieres ejecutar periódicamente
async function miFuncion() {
  console.log("La función se ejecuta en:", new Date().toLocaleTimeString())

  const mailOptions = {
    from: 'salvipablo@gmail.com',
    to: 'psalvi@semapi.com',
    subject: 'Prueba nodemailer',
    text: 'Stock bajo de Aceite Elaion 10W40'
  }

  await sendMailNodeMailer(mailOptions)
}

// Configura el intervalo para ejecutar la función
const intervalo = setInterval(miFuncion, INTERVAL_MS);

// Opción para detener la ejecución después de un cierto tiempo (por ejemplo, 30 segundos)
setTimeout(() => {
    clearInterval(intervalo);
    console.log("El intervalo ha sido detenido.");
}, 62000); // Detenemos el intervalo después de 30 segundos
