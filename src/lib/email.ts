function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendResend(options: {
  apiKey: string;
  from: string;
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  idempotencyKey: string;
}) {
  const { apiKey, from, to, subject, text, html, idempotencyKey } = options;
  if (!apiKey || !from) throw new Error('Email service is not configured.');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'homestayreview.my/1.0',
      'Idempotency-Key': idempotencyKey
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      html
    })
  });

  if (!response.ok) {
    const message = await response.text().catch(() => '');
    throw new Error(`Resend request failed (${response.status}) ${message.slice(0, 180)}`);
  }

  return response.json() as Promise<{ id: string }>;
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
  const safeName = escapeHtml(reviewerName);
  const safeStay = escapeHtml(homestayName);
  const safeUrl = escapeHtml(verifyUrl);

  return sendResend({
    apiKey,
    from,
    to,
    subject: `Verify your review of ${homestayName}`,
    idempotencyKey: `review-verification-${reviewId}`,
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
  });
}

export async function sendAdminReviewAlert(options: {
  apiKey: string;
  from: string;
  to: string[];
  reviewerName: string;
  homestayName: string;
  reviewTitle: string;
  rating: number;
  reviewId: number;
  adminUrl: string;
}) {
  const { apiKey, from, to, reviewerName, homestayName, reviewTitle, rating, reviewId, adminUrl } = options;
  if (!to.length) return null;

  const safeReviewer = escapeHtml(reviewerName);
  const safeStay = escapeHtml(homestayName);
  const safeTitle = escapeHtml(reviewTitle);
  const safeAdminUrl = escapeHtml(adminUrl);

  return sendResend({
    apiKey,
    from,
    to,
    subject: `Review waiting: ${homestayName}`,
    idempotencyKey: `review-admin-alert-${reviewId}`,
    text: `${reviewerName} verified a ${rating}/5 review of ${homestayName}: “${reviewTitle}”.\n\nOpen the moderation queue: ${adminUrl}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#181714;line-height:1.55">
        <p style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#68635b">HomestayReview.my · moderation</p>
        <h1 style="font-size:26px;line-height:1.15;margin:16px 0">A verified review is waiting.</h1>
        <p><strong>${safeStay}</strong></p>
        <p style="font-size:22px;margin:12px 0">${'★'.repeat(Math.max(0, Math.min(5, rating)))}${'☆'.repeat(Math.max(0, 5 - Math.min(5, rating)))}</p>
        <p><strong>${safeTitle}</strong><br><span style="color:#68635b">Submitted by ${safeReviewer}</span></p>
        <p style="margin:28px 0"><a href="${safeAdminUrl}" style="display:inline-block;background:#181714;color:white;padding:13px 18px;border-radius:10px;text-decoration:none;font-weight:700">Open moderation queue</a></p>
        <p style="font-size:13px;color:#68635b">Nothing has been published. Approval is still required.</p>
      </div>`
  });
}

export async function sendReviewDecisionEmail(options: {
  apiKey: string;
  from: string;
  to: string;
  reviewerName: string;
  homestayName: string;
  reviewId: number;
  status: 'approved' | 'rejected' | 'needs_changes' | 'removed';
  note?: string;
  publicUrl?: string;
}) {
  const { apiKey, from, to, reviewerName, homestayName, reviewId, status, note = '', publicUrl = '' } = options;
  const safeName = escapeHtml(reviewerName);
  const safeStay = escapeHtml(homestayName);
  const safeNote = escapeHtml(note);
  const safePublicUrl = escapeHtml(publicUrl);

  const copy = {
    approved: {
      subject: `Your review of ${homestayName} is live`,
      title: 'Your review was approved.',
      body: `Thanks for helping future guests with a real experience at ${homestayName}.`,
      action: publicUrl ? 'View the homestay profile' : ''
    },
    rejected: {
      subject: `Update on your review of ${homestayName}`,
      title: 'Your review was not published.',
      body: 'The submission did not meet the moderation requirements in its current form.',
      action: ''
    },
    needs_changes: {
      subject: `Changes requested for your ${homestayName} review`,
      title: 'Your review needs a change before publication.',
      body: 'The review remains private. The moderator left feedback below.',
      action: ''
    },
    removed: {
      subject: `Update on your review of ${homestayName}`,
      title: 'Your review has been removed.',
      body: 'The review is no longer public following moderation.',
      action: ''
    }
  }[status];

  const noteText = note ? `\n\nModerator note: ${note}` : '';
  const urlText = status === 'approved' && publicUrl ? `\n\n${publicUrl}` : '';

  return sendResend({
    apiKey,
    from,
    to,
    subject: copy.subject,
    idempotencyKey: `review-decision-${reviewId}-${status}`,
    text: `Hi ${reviewerName},\n\n${copy.title}\n\n${copy.body}${noteText}${urlText}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#181714;line-height:1.55">
        <p style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#68635b">HomestayReview.my</p>
        <h1 style="font-size:26px;line-height:1.15;margin:16px 0">${copy.title}</h1>
        <p>Hi ${safeName},</p>
        <p>${copy.body.replace(homestayName, `<strong>${safeStay}</strong>`)}</p>
        ${safeNote ? `<div style="margin:20px 0;padding:14px;background:#f2f2ee;border-radius:8px"><strong>Moderator note</strong><br>${safeNote}</div>` : ''}
        ${status === 'approved' && safePublicUrl ? `<p style="margin:28px 0"><a href="${safePublicUrl}" style="display:inline-block;background:#181714;color:white;padding:13px 18px;border-radius:10px;text-decoration:none;font-weight:700">${copy.action}</a></p>` : ''}
      </div>`
  });
}
