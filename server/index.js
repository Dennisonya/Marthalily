import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json({ limit: '50kb' }));

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function cleanText(value, maxLen) {
  const v = String(value ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .trim();
  return v.length > maxLen ? v.slice(0, maxLen) : v;
}

function isValidEmail(email) {
  const e = String(email ?? '').trim();
  // Simple, pragmatic validation for contact forms
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

app.post('/api/send-quote', async (req, res) => {
  try {
    const fullName = cleanText(req.body?.fullName, 200);
    const email = cleanText(req.body?.email, 200);
    const phone = cleanText(req.body?.phone, 80);
    const serviceType = cleanText(req.body?.serviceType, 120);
    const message = cleanText(req.body?.message, 5000);

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ success: false });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false });
    }

    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASS,
    } = process.env;

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
      return res.status(500).json({ success: false });
    }

    const port = Number(EMAIL_PORT);
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port,
      secure: port === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(serviceType || '—');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 12px">New Quote Request</h2>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Name:</td><td style="padding:6px 0">${safeName}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Email:</td><td style="padding:6px 0">${safeEmail}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Phone:</td><td style="padding:6px 0">${safePhone}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Service:</td><td style="padding:6px 0">${safeService}</td></tr>
        </table>
        <div style="margin-top:14px">
          <div style="font-weight:600;margin-bottom:6px">Message:</div>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb">${safeMessage}</div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `Martha Lily Website <${EMAIL_USER}>`,
      to: 'info@marthalilyfacilitymanagement.com',
      replyTo: email,
      subject: `Quote Request${serviceType ? ` — ${serviceType}` : ''}`,
      html,
    });

    return res.json({ success: true });
  } catch {
    return res.status(500).json({ success: false });
  }
});

const port = Number(process.env.PORT || 5174);
app.listen(port, () => {
  // Intentionally minimal; no secrets logged
  console.log(`API listening on http://localhost:${port}`);
});

