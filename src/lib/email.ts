function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendVerificationEmail(options: {
  apiKey: string;
  from: string;
  to: string;
  reviewerName: string;
  homestayName: string;
  verifyUrl: string;
  reviewId: number;
}) {
  const { apiKey, from, to, reviewerName, homestayName, verifyUrl, reviewId } = options;
  if (!apiKey || !from) throw new Error('Email service is not configured.');

  const safeName = escapeHtml(reviewerName);
  const safeStay = escapeHtml(homestayName);
  const safeUrl = escapeHtml(verifyUrl);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'homestayreview.my/1.0',
      'Idempotency-Key': `review-verification-${reviewId}`
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Verify your review of ${homestayName}`,
      text: `Hi ${reviewerName},\n\nPlease verify your email so your review of ${homestayName} can enter the HomestayReview.my moderation queue.\n\n${verifyUrl}\n\nThe link expires in 24 hours. Your review will not be public until it is manually approved.`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#181714;line-height:1.55">
          <p style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#68635b">HomestayReview.my</p>
          <h1 style="font-size:26px;line-height:1.15;margin:16px 0">Verify your review</h1>
          <p>Hi ${safeName},</p>
          <p>Confirm your email so your review of <strong>${safeStay}</strong> can enter the private moderation queue.</p>
          <p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;background:#181714;color:white;padding:13px 18px;border-radius:10px;text-decoration:none;font-weight:700">Verify my review</a></p>
          <p style="font-size:13px;color:#68635b">This link expires in 24 hours. Verification does not publish your review. It still requires manual approval.</p>
        </div>`
    })
  });

  if (!response.ok) {
    const message = await response.text().catch(() => '');
    throw new Error(`Resend request failed (${response.status}) ${message.slice(0, 180)}`);
  }

  return response.json() as Promise<{ id: string }>;
}
