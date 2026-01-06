import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select();
    
    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: "You are already on the list!" }, { status: 409 });
      }
      throw error;
    }

    try {
      await resend.emails.send({
        from: 'MA Digitize https://ma-digitize-landing-6zg8.vercel.app/',
        to: email,
        subject: 'Welcome to the Waitlist! 🚀',
        html: `
          <div style="font-family: sans-serif; line-height: 1.5; color: #1a1a1a;">
            <h2>You're on the list!</h2>
            <p>Hi there,</p>
            <p>Thanks for joining the waitlist for <strong>MA UI Kit</strong>. We're excited to have you on board!</p>
            <p>We'll notify you as soon as we launch and you'll be among the first to get early access and special discounts.</p>
            <br />
            <p>Best regards,<br />The MA Digitize Team</p>
          </div>
        `
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }
    return NextResponse.json({ message: "Joined successfully", data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
