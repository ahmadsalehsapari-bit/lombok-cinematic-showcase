import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const { name, email, service, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (name.length > 100 || email.length > 255 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: 'Input exceeds maximum length' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Lombok Visual Contact <onboarding@resend.dev>',
        to: ['lombokvisuals@gmail.com'],
        reply_to: email,
        subject: `Pesan Baru dari ${name} - Lombok Visual`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
            <div style="background: #111; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #c9a96e; margin: 0; font-size: 24px;">Lombok Visual</h1>
              <p style="color: #888; margin: 5px 0 0; font-size: 14px;">Pesan Baru dari Website</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 120px; font-weight: bold;">Nama</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #c9a96e;">${email}</a></td>
                </tr>
                ${service ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Layanan</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${service}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0; color: #666; font-weight: bold; vertical-align: top;">Pesan</td>
                  <td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${message}</td>
                </tr>
              </table>
              <div style="margin-top: 30px; padding: 15px; background: #f5f0e8; border-radius: 6px; border-left: 4px solid #c9a96e;">
                <p style="margin: 0; color: #666; font-size: 14px;">💡 Balas langsung ke email ini untuk membalas pesan dari <strong>${name}</strong></p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      throw new Error(`Resend API error: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send email' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
