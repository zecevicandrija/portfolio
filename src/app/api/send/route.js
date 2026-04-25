import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { LRUCache } from 'lru-cache';

const resend = new Resend(process.env.RESEND_API);

// Rate limiter: 3 requests per 10 minutes per IP
const rateLimit = new LRUCache({
  max: 500, // store up to 500 IPs
  ttl: 1000 * 60 * 10, // 10 minutes
});

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const currentUsage = rateLimit.get(ip) || 0;

    if (currentUsage >= 3) {
      return NextResponse.json(
        { error: 'Previše zahteva. Molimo pokušajte ponovo kasnije.' },
        { status: 429 }
      );
    }

    rateLimit.set(ip, currentUsage + 1);

    const { name, email, message } = await request.json();
    const finalMessage = message || 'Nema poruke';

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Ime i mejl su obavezni.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'ZecevicDev <no-reply@zecevicdev.com>',
      to: ['zecevicdev@gmail.com'],
      subject: `Nova poruka od: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Nova poruka sa kontakt forme</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${finalMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Greška pri slanju mejla.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Interna greška servera.' }, { status: 500 });
  }
}
