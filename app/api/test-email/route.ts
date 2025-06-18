import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST() {
  // Verify environment variables
  const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    return NextResponse.json(
      {
        success: false,
        message: 'Missing required environment variables',
        missingVariables: missingVars,
      },
      { status: 500 }
    );
  }

  console.log('Environment variables check passed');
  console.log('SMTP Configuration:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    contactEmail: process.env.CONTACT_EMAIL,
  });

  try {
    // Create transporter with debug mode
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: true, // Enable debug mode
      logger: true, // Enable logging
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP Connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Connection verification failed:', verifyError);
      return NextResponse.json(
        {
          success: false,
          message: 'SMTP Connection verification failed',
          error: verifyError instanceof Error ? verifyError.message : 'Unknown error',
        },
        { status: 500 }
      );
    }

    // Test email configuration
    const testEmail = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Test Email from MangroveIT',
      text: 'This is a test email to verify SMTP configuration.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Test Email from MangroveIT</h2>
          <p>This is a test email to verify SMTP configuration.</p>
          <p>If you're receiving this email, your SMTP settings are working correctly!</p>
          <div style="margin-top: 20px; padding: 10px; background-color: #F3F4F6; border-radius: 5px;">
            <p><strong>Configuration Details:</strong></p>
            <ul>
              <li>SMTP Host: ${process.env.SMTP_HOST}</li>
              <li>SMTP Port: ${process.env.SMTP_PORT}</li>
              <li>Sender: ${process.env.SMTP_USER}</li>
            </ul>
          </div>
        </div>
      `,
    };

    console.log('Attempting to send email to:', process.env.CONTACT_EMAIL);

    // Send test email
    const info = await transporter.sendMail(testEmail);
    console.log('Email sent successfully!', {
      messageId: info.messageId,
      response: info.response,
    });

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending test email:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });

    // Check for specific error types
    let errorMessage = 'Failed to send test email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Invalid SMTP credentials';
      } else if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Could not connect to SMTP server';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'SMTP host not found';
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 