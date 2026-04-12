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
  // Example: High ARR threshold or specific keywords
  const isHighStakes = arr && (arr.includes('M') || parseInt(arr) > 1000000);

  // In a real scenario, you'd use a service like SendGrid, Mailgun, or a Discord Webhook here.
  // Example for a Discord Webhook (set via Vercel Environment Variables):
  const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;
  
  if (DISCORD_WEBHOOK) {
    try {
      await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🚀 **New Alignment Inquiry Received**\n\n**Name/Email:** ${name || 'N/A'} (${email || 'N/A'})\n**ARR:** ${arr}\n**ACV:** ${acv}\n**Goal:** ${goal}\n**High Stakes?** ${isHighStakes ? '✅ YES' : '❌ NO'}`,
        }),
      });
    } catch (err) {
      console.error('Failed to send Discord webhook:', err);
    }
  }

  // For now, return success and log for debugging in Vercel console
  console.log(`Alignment Inquiry Received: ${JSON.stringify(req.body)}`);

  return res.status(200).json({
    success: true,
    message: isHighStakes 
      ? "ALIGNMENT CONFIRMED. Systems Architect will initiate contact within 24 hours." 
      : "Inquiry received. Reviewing for strategic alignment."
  });
};
