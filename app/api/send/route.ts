import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { EmailTemplate } from '@/components/ui/email-template';

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_EMAIL || process.env.FROM_EMAIL;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY.' },
        { status: 503 }
      );
    }

    if (!fromEmail) {
      return NextResponse.json(
        { error: 'From email is not configured. Please set CONTACT_EMAIL or FROM_EMAIL.' },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const body = await request.json();
    console.log('Request Body:', body);

    const { name, email } = body;
    if (!email || !name) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // from: "Acme <onboarding@resend.dev>", // Ensure this email is verified in Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Contact Form Submission',
      react: await EmailTemplate({ firstName: name }),
    });
    return NextResponse.json({ data, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.log('Error', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
