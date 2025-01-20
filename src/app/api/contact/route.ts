import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response("Message sent successfully!");
  } catch (error) {
    console.error(error);
    return new Response("Failed to send message. Please try again.", {
      status: 500,
    });
  }
}
