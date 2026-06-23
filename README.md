# Tonspur Webpage

Production-oriented Vite + React + TypeScript marketing site for Tonspur, based on the
`design_handoff_tonspur_home_b` Direction B handoff.

## Local Development

```bash
npm install
npm run dev
```

The local app runs on the Vite dev server. The main routes are:

- `/`
- `/blog`
- `/faq`
- `/presse`
- `/agb`
- `/datenschutz`
- `/impressum`
- `/passwort-vergessen`
- `/passwort-zuruecksetzen`

## Verification

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Supabase Auth Configuration

Only public browser-safe values belong in this app:

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_public_key
VITE_SITE_URL=https://your-production-domain.example
```

Password reset flow:

1. `/passwort-vergessen` calls `resetPasswordForEmail`.
2. Supabase sends an email with `redirectTo` set to `/passwort-zuruecksetzen`.
3. `/passwort-zuruecksetzen` reads the recovery session from the Supabase link and calls `updateUser({ password })`.
4. The app signs the user out after a successful reset.

Add these URLs to Supabase Auth redirect allow-list:

- `http://localhost:5173/**`
- `https://your-production-domain.example/passwort-zuruecksetzen`
- `https://*-<team-or-account-slug>.vercel.app/**`

For production email delivery, configure a custom SMTP provider in Supabase.

## Vercel

`vercel.json` sets the Vite build command, `dist` output directory, SPA rewrites,
asset caching, and basic security headers.

Set the same `VITE_*` environment variables in the Vercel project before publishing.
