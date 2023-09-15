// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: 'Ketaki <ketakimicrosoft@gmail.com>',
      to: ['ketakimicrosoft@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// import { Resend } from 'resend';

// const resend = new Resend('re_E8wqevqt_BM7dyHQXaNp3rqDZ1aPhiw2M');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'ketakimicrosoft@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });