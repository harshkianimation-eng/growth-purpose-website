import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const MAIN_RECEIVER_EMAIL = 'contact.thegrowthpurpose@gmail.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, planName, growthGoal, website, formType, service } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.RECEIVER_EMAIL || MAIN_RECEIVER_EMAIL;

    const isStrategy = formType === 'strategy' || !!planName || !!growthGoal;
    const subject = isStrategy
      ? `🚀 New Growth Strategy Booking: ${name} (${planName || 'Transformation Session'})`
      : `📩 New Inquiry from ${name} - The Growth Purpose`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0D0D11; margin: 0; padding: 20px; color: #FFFFFF; }
          .container { max-width: 600px; margin: 0 auto; background: #1F1F24; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid rgba(109, 74, 255, 0.3); }
          .header { background: linear-gradient(135deg, #1A0E2E 0%, #2D1656 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
          .header p { margin: 6px 0 0 0; font-size: 14px; color: #B89CFF; }
          .badge { display: inline-block; background: #6D4AFF; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; }
          .content { padding: 30px 24px; color: #CBD5E1; }
          .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          .data-table td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; }
          .label { font-weight: 700; color: #94A3B8; width: 140px; }
          .value { color: #FFFFFF; font-weight: 500; }
          .message-box { background: #151518; border-left: 4px solid #6D4AFF; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #E2E8F0; }
          .footer { background: #151518; border-top: 1px solid rgba(255,255,255,0.08); padding: 16px 24px; text-align: center; font-size: 12px; color: #64748B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">${isStrategy ? 'Strategy Session' : 'Contact Lead'}</div>
            <h1>The Growth Purpose Website Lead</h1>
            <p>${isStrategy ? 'New consultation request submitted' : 'New lead received via contact form'}</p>
          </div>
          
          <div class="content">
            <table class="data-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #B89CFF; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${phone}" style="color: #FFFFFF; text-decoration: none;">${phone}</a></td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td class="label">Program / Focus</td>
                <td class="value"><span style="background: rgba(109,74,255,0.2); color: #B89CFF; padding: 2px 8px; border-radius: 6px; font-weight: 600;">${service}</span></td>
              </tr>
              ` : ''}
              ${website ? `
              <tr>
                <td class="label">Website / Handle</td>
                <td class="value">${website}</td>
              </tr>
              ` : ''}
              ${planName ? `
              <tr>
                <td class="label">Target Roadmap</td>
                <td class="value"><span style="background: rgba(109,74,255,0.2); color: #B89CFF; padding: 2px 8px; border-radius: 6px; font-weight: 600;">${planName}</span></td>
              </tr>
              ` : ''}
              ${growthGoal ? `
              <tr>
                <td class="label">Growth Goal</td>
                <td class="value">${growthGoal}</td>
              </tr>
              ` : ''}
            </table>

            ${message ? `
            <div style="margin-top: 24px;">
              <div class="label" style="margin-bottom: 6px;">Client Message:</div>
              <div class="message-box">${message}</div>
            </div>
            ` : ''}
          </div>

          <div class="footer">
            Delivered directly to <strong>${receiverEmail}</strong> — The Growth Purpose System.
          </div>
        </div>
      </body>
      </html>
    `;

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set. Simulating submission to:', receiverEmail);
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Lead received successfully! (Simulated mode: RESEND_API_KEY environment variable missing).'
      });
    }

    const resend = new Resend(apiKey);
    const response = await resend.emails.send({
      from: 'The Growth Purpose <onboarding@resend.dev>',
      to: [receiverEmail],
      replyTo: email,
      subject: subject,
      html: htmlContent,
    });

    if (response.error) {
      console.error('Resend API error:', response.error);
      return NextResponse.json(
        { error: response.error.message || 'Resend failed to send email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: response.data?.id,
      message: 'Email dispatched successfully via Resend.'
    });
  } catch (err: unknown) {
    console.error('API send-email error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Server error occurred.' },
      { status: 500 }
    );
  }
}
