import { NextResponse } from 'next/server';

// Validate environment variables
const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_EMAIL',
];

const missingEnvVars = requiredEnvVars.filter(
  (envVar) => !process.env[envVar] || process.env[envVar] === ''
);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
}

export async function POST(request: Request) {
  try {
    // Check for missing environment variables
    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        { error: 'Email service not properly configured' },
        { status: 500 }
      );
    }

    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    // Create a transporter using SMTP
    const transporter = require('nodemailer').createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      console.error('SMTP connection verification failed:', error);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the contact form on Mangrove IT website.
          </p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 