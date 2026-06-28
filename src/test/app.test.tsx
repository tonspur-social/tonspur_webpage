import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from '../App';
import { StoreButtons } from '../components/StoreButtons';
import { MailSuccessPage, PasswordForgotPage, PasswordResetPage } from '../pages/PasswordPages';

const supabaseMocks = vi.hoisted(() => ({
  exchangeCodeForSession: vi.fn(),
  getSession: vi.fn(),
  onAuthStateChange: vi.fn(),
  resetPasswordForEmail: vi.fn(),
  signOut: vi.fn(),
  updateUser: vi.fn(),
  unsubscribe: vi.fn(),
}));

vi.mock('../lib/supabase', () => ({
  supabase: {
    auth: {
      exchangeCodeForSession: supabaseMocks.exchangeCodeForSession,
      getSession: supabaseMocks.getSession,
      onAuthStateChange: supabaseMocks.onAuthStateChange,
      resetPasswordForEmail: supabaseMocks.resetPasswordForEmail,
      signOut: supabaseMocks.signOut,
      updateUser: supabaseMocks.updateUser,
    },
  },
  isSupabaseConfigured: () => true,
}));

function renderWithRouter(ui: React.ReactElement, route = '/') {
  return render(
    <MemoryRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      initialEntries={[route]}
    >
      {ui}
    </MemoryRouter>,
  );
}

describe('app routes and shared UI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.history.replaceState({}, '', '/');
    window.location.hash = '';
    supabaseMocks.exchangeCodeForSession.mockResolvedValue({
      data: { session: { user: { id: 'user-1' } } },
      error: null,
    });
    supabaseMocks.getSession.mockResolvedValue({ data: { session: { user: { id: 'user-1' } } } });
    supabaseMocks.onAuthStateChange.mockReturnValue({
      data: { subscription: { unsubscribe: supabaseMocks.unsubscribe } },
    });
    supabaseMocks.resetPasswordForEmail.mockResolvedValue({ error: null });
    supabaseMocks.updateUser.mockResolvedValue({ error: null });
    supabaseMocks.signOut.mockResolvedValue({ error: null });
  });

  it('renders content routes', () => {
    renderWithRouter(<App />, '/faq');
    expect(screen.getByRole('heading', { name: /antworten/i })).toBeInTheDocument();
  });

  it('renders the published terms page', () => {
    renderWithRouter(<App />, '/agb');

    expect(
      screen.getByRole('heading', { name: /allgemeine geschäftsbedingungen/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/stand: juni 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/tonspur ug i\.g\./i)).toBeInTheDocument();
    expect(screen.getByText(/tonspur club ist ein optionales/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /verbraucherstreitbeilegung/i }),
    ).toBeInTheDocument();
  });

  it('falls store badges back to the download anchor', () => {
    render(<StoreButtons />);
    expect(screen.getByRole('link', { name: /app store/i })).toHaveAttribute('href', '#download');
    expect(screen.getByRole('link', { name: /google play/i })).toHaveAttribute(
      'href',
      '#download',
    );
  });

  it('requests a Supabase password reset email with the reset route', async () => {
    renderWithRouter(<PasswordForgotPage />, '/passwort-vergessen');

    fireEvent.change(screen.getByLabelText(/e-mail-adresse/i), {
      target: { value: 'fan@example.com' },
    });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /link senden/i }));
    });

    await waitFor(() => {
      expect(supabaseMocks.resetPasswordForEmail).toHaveBeenCalledWith('fan@example.com', {
        redirectTo: expect.stringContaining('/passwort-zuruecksetzen'),
      });
    });
    expect(await screen.findByText(/link zum zurücksetzen unterwegs/i)).toBeInTheDocument();
  });

  it('renders the mail confirmation success page', () => {
    renderWithRouter(<App />, '/mail-bestaetigt');

    expect(screen.getByRole('heading', { name: /deine mail ist bestätigt/i })).toBeInTheDocument();
    expect(screen.getByText(/e-mail-adresse wurde bestätigt/i)).toBeInTheDocument();
  });

  it('renders Supabase mail confirmation errors', () => {
    window.location.hash = '#error=access_denied&error_description=Link+abgelaufen';

    renderWithRouter(<MailSuccessPage />, '/mail-bestaetigt');

    expect(
      screen.getByRole('heading', { name: /link konnte nicht bestätigt werden/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/link abgelaufen/i)).toBeInTheDocument();
  });

  it('updates the password through the recovery session', async () => {
    renderWithRouter(<PasswordResetPage />, '/passwort-zuruecksetzen');

    expect(await screen.findByText(/dein link ist gültig/i)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/^neues passwort$/i), {
      target: { value: 'neues-passwort' },
    });
    fireEvent.change(screen.getByLabelText(/passwort wiederholen/i), {
      target: { value: 'neues-passwort' },
    });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /passwort speichern/i }));
    });

    await waitFor(() => {
      expect(supabaseMocks.updateUser).toHaveBeenCalledWith({ password: 'neues-passwort' });
    });
    expect(supabaseMocks.signOut).toHaveBeenCalled();
    expect(await screen.findByText(/passwort wurde aktualisiert/i)).toBeInTheDocument();
  });

  it('shows a clearer message when the password reset page has no recovery session', async () => {
    supabaseMocks.getSession.mockResolvedValue({ data: { session: null } });

    renderWithRouter(<PasswordResetPage />, '/passwort-zuruecksetzen');

    expect(await screen.findByText(/keine gültige wiederherstellungssitzung/i)).toBeInTheDocument();
    expect(screen.getByText(/ConfirmationURL/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /passwort speichern/i })).toBeDisabled();
  });

  it('renders Supabase query errors on the password reset page', async () => {
    window.history.replaceState(
      {},
      '',
      '/passwort-zuruecksetzen?error=access_denied&error_description=Link+abgelaufen',
    );

    renderWithRouter(<PasswordResetPage />, '/passwort-zuruecksetzen');

    expect(await screen.findByText('Link abgelaufen', { selector: '.form-status span' })).toBeInTheDocument();
    expect(supabaseMocks.getSession).not.toHaveBeenCalled();
  });

  it('exchanges password recovery code links before enabling the form', async () => {
    window.history.replaceState({}, '', '/passwort-zuruecksetzen?code=recovery-code');

    renderWithRouter(<PasswordResetPage />, '/passwort-zuruecksetzen');

    expect(await screen.findByText(/dein link ist gültig/i)).toBeInTheDocument();
    expect(supabaseMocks.exchangeCodeForSession).toHaveBeenCalledWith('recovery-code');
    expect(screen.getByRole('button', { name: /passwort speichern/i })).toBeEnabled();
  });
});
