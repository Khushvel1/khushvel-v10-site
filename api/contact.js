// Vercel Serverless Function: Alignment Gate Backend (api/contact.js)
// Handles incoming high-stakes inquiries from the V10 Site and Fintech Portfolio.

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { arr, acv, goal, name, email } = req.body;

  // Basic validation
  if (!goal) {
    return res.status(400).json({ error: 'Strategic goal is required.' });
  }

  // LOGIC: Filter for "Strategic Alignment"
  const isHighStakes = arr && (arr.includes('M') || parseInt(arr) > 1000000);

  // --- 1. DISCORD NOTIFICATION ---
  const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;
  if (DISCORD_WEBHOOK) {
    try {
      await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🚀 **New Alignment Inquiry Received**\n\n**Source:** ${name || 'General'}\n**Contact:** ${email || 'N/A'}\n**ARR:** ${arr}\n**ACV:** ${acv || 'N/A'}\n**Goal:** ${goal}\n**High Stakes?** ${isHighStakes ? '✅ YES' : '❌ NO'}`,
        }),
      });
    } catch (err) {
      console.error('Failed to send Discord webhook:', err);
    }
  }

  // --- 2. RESEND EMAIL NOTIFICATION ---
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Acme <onboarding@resend.dev>', // Update this after domain verification
          to: ['hello@khushvel.com'],
          subject: `Strategic Alignment Inquiry: ${name || 'New Lead'}`,
          html: `
            <h1>New Strategic Inquiry</h1>
            <p><strong>Source:</strong> ${name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>ARR/Scale:</strong> ${arr}</p>
            <p><strong>Goal:</strong> ${goal}</p>
            <hr />
            <p><em>Inquiry filtered via V10 Alignment Gate.</em></p>
          `,
        }),
      });
    } catch (err) {
      console.error('Failed to send email via Resend:', err);
    }
  }

  return res.status(200).json({
    success: true,
    message: isHighStakes 
      ? "ALIGNMENT CONFIRMED. Systems Architect will initiate contact within 24 hours." 
      : "Inquiry received. Reviewing for strategic alignment."
  });
};
