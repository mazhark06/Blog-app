let mailTemplate = (otp) => {

return ( `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f6f9fc;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 500px;
        margin: 20px auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      .header {
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
      }
      .otp {
        display: block;
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        background: #f0f4ff;
        padding: 15px;
        border-radius: 8px;
        margin: 20px 0;
        color: #2d4ae2;
      }
      .footer {
        text-align: center;
        font-size: 13px;
        color: #777;
        margin-top: 20px;
      }

      /* ✅ Responsive styles */
      @media only screen and (max-width: 600px) {
        .container {
          width: 70% !important;
          padding: 15px !important;
          margin: 20px auto;
        }
        .otp {
          font-size: 22px !important;
          padding: 12px !important;
        }
        .header {
          font-size: 20px !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">OTP Verification</div>
      <p>Hello,</p>
      <p>
        Use the following One-Time Password (OTP) to complete your verification
        process:
      </p>
      <span class="otp">${otp}</span>
      <p>
        This OTP is valid for <b>10 minutes</b>. Please do not share it with
        anyone.
      </p>
      <div class="footer">
        If you didn’t request this, you can safely ignore this email.
      </div>
    </div>
  </body>
</html>
`)
}
export default mailTemplate