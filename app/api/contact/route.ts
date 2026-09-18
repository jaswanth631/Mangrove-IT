import { NextResponse } from 'next/server';
import {
  contactAutoReplyTemplate,
  contactNotificationTemplate,
} from '@/lib/email/templates';
import { getEmailLogoAttachments } from '@/lib/email/logo';

const DEFAULT_CONTACT_EMAIL = 'suresh@mangroveit.com';

// Validate environment variables
const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
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

    const contactEmail = process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;

    // Notification email to Mangrove IT team
    const notificationMail = {
      from: `"Mangrove Integrated Solutions" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: contactNotificationTemplate({ name, email, phone, message }),
      attachments: getEmailLogoAttachments(),
    };

    // Auto-reply confirmation to the person who submitted the form
    const autoReplyMail = {
      from: `"Mangrove Integrated Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Mangrove Integrated Solutions',
      html: contactAutoReplyTemplate({ name }),
      attachments: getEmailLogoAttachments(),
    };

    const info = await transporter.sendMail(notificationMail);
    await transporter.sendMail(autoReplyMail);
    console.log('Emails sent successfully:', info.messageId);

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