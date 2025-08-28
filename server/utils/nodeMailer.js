import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "mazharkh224@gmail.com",
    pass: "osxy yemp sglq xxvw",
  },
});

const mail  = async (to,subject,html) => {
  const info = await transporter.sendMail({
    from: 'mazhar@devx.services',
    to: to,
    subject: subject,
    html: html, // HTML body
  });
};
export default mail
