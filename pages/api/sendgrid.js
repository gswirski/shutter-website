import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "help@shutter.dev", // Your email where you'll receive emails
      from: `${req.body.name} <website@shutter.dev>`, // your website email address here
      replyTo: req.body.email,
      subject: "[Shutter] Contact",
      text: `${req.body.message}\n\nCamera: ${req.body.camera}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;