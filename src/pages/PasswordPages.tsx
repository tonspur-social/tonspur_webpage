import { AlertCircle, CheckCircle2, KeyRound, Mail } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  getPasswordResetRedirectUrl,
  parseAuthHash,
  validatePasswordReset,
} from '../lib/site';

type Status = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
};

export function PasswordForgotPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Wir senden dir den Link.' });

    if (!supabase) {
      setStatus({
        type: 'error',
        message:
          'Supabase ist noch nicht konfiguriert. Bitte VITE_SUPABASE_URL und VITE_SUPABASE_PUBLISHABLE_KEY setzen.',
      });
      return;
    }

    const redirectTo = getPasswordResetRedirectUrl(import.meta.env.VITE_SITE_URL);
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });

    if (error) {
      setStatus({
        type: 'error',
        message:
          'Der Link konnte gerade nicht gesendet werden. Bitte prüfe die Adresse oder versuche es später erneut.',
      });
      return;
    }

    setStatus({
      type: 'success',
      message:
        'Wenn ein Konto zu dieser Adresse existiert, ist der Link zum Zurücksetzen unterwegs.',
    });
  }

  return (
    <AuthShell
      eyebrow="Passwort vergessen"
      title="Schick dir einen neuen Einstieg."
      body="Gib die E-Mail-Adresse deines Tonspur-Kontos ein. Der Link führt dich direkt zur Seite für dein neues Passwort."
      icon={<Mail aria-hidden="true" />}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="reset-email">E-Mail-Adresse</label>
        <input
          id="reset-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="du@example.com"
        />
        <button className="btn btn--primary btn--lg" type="submit" disabled={status.type === 'loading'}>
          Link senden
        </button>
        <StatusMessage status={status} />
      </form>
    </AuthShell>
  );
}

export function PasswordResetPage() {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState<Status>({
    type: 'idle',
    message: 'Wir prüfen deinen Wiederherstellungslink.',
  });

  useEffect(() => {
    const hashState = parseAuthHash(window.location.hash);

    if (hashState.error) {
      setStatus({
        type: 'error',
        message:
          hashState.errorDescription ??
          'Der Wiederherstellungslink ist ungültig oder abgelaufen.',
      });
      return undefined;
    }

    if (!supabase) {
      setStatus({
        type: 'error',
        message:
          'Supabase ist noch nicht konfiguriert. Bitte VITE_SUPABASE_URL und VITE_SUPABASE_PUBLISHABLE_KEY setzen.',
      });
      return undefined;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;

      if (data.session) {
        setIsReady(true);
        setStatus({ type: 'idle', message: 'Dein Link ist gültig. Wähle ein neues Passwort.' });
      } else {
        setStatus({
          type: 'error',
          message:
            'Öffne bitte den Link aus deiner E-Mail erneut. Ohne gültige Sitzung können wir kein neues Passwort setzen.',
        });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') && session) {
        setIsReady(true);
        setStatus({ type: 'idle', message: 'Dein Link ist gültig. Wähle ein neues Passwort.' });
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validatePasswordReset(password, confirmation);

    if (!validation.ok) {
      setStatus({ type: 'error', message: validation.message });
      return;
    }

    if (!supabase) {
      setStatus({
        type: 'error',
        message:
          'Supabase ist noch nicht konfiguriert. Bitte VITE_SUPABASE_URL und VITE_SUPABASE_PUBLISHABLE_KEY setzen.',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Wir aktualisieren dein Passwort.' });
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus({
        type: 'error',
        message:
          'Das Passwort konnte nicht aktualisiert werden. Bitte fordere einen neuen Link an.',
      });
      return;
    }

    await supabase.auth.signOut();
    setPassword('');
    setConfirmation('');
    setIsReady(false);
    setStatus({
      type: 'success',
      message: 'Dein Passwort wurde aktualisiert. Du kannst dich nun in der App anmelden.',
    });
  }

  return (
    <AuthShell
      eyebrow="Neues Passwort"
      title="Setze dein Passwort zurück."
      body="Diese Seite funktioniert nur über den Link aus deiner Supabase-E-Mail. Danach wird die Wiederherstellungssitzung beendet."
      icon={<KeyRound aria-hidden="true" />}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="new-password">Neues Passwort</label>
        <input
          id="new-password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          disabled={!isReady || status.type === 'success'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="new-password-confirmation">Passwort wiederholen</label>
        <input
          id="new-password-confirmation"
          name="password-confirmation"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          disabled={!isReady || status.type === 'success'}
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
        />
        <button
          className="btn btn--primary btn--lg"
          type="submit"
          disabled={!isReady || status.type === 'loading' || status.type === 'success'}
        >
          Passwort speichern
        </button>
        <StatusMessage status={status} />
      </form>
      <p className="auth-help">
        Link abgelaufen? <Link to="/passwort-vergessen">Neuen Link anfordern</Link>
      </p>
    </AuthShell>
  );
}

function AuthShell({
  eyebrow,
  title,
  body,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="auth-page">
      <div className="container container--narrow">
        <div className="auth-card">
          <div className="feature__icon auth-card__icon">{icon}</div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-lg">{title}</h1>
          <p className="lede">{body}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

function StatusMessage({ status }: { status: Status }) {
  if (!status.message) return null;

  return (
    <div className={`form-status form-status--${status.type}`} aria-live="polite">
      {status.type === 'success' ? <CheckCircle2 aria-hidden="true" /> : <AlertCircle aria-hidden="true" />}
      <span>{status.message}</span>
    </div>
  );
}
