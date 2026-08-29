export function getAdminIdentity(request: Request, env: Env) {
  const email = request.headers.get('Cf-Access-Authenticated-User-Email')?.trim().toLowerCase() || '';
  if (!email) return null;

  const allowed = (env.ADMIN_EMAIL || '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (allowed.length > 0 && !allowed.includes(email)) return null;
  return email;
}
