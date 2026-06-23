import { describe, expect, it } from 'vitest';
import {
  getPasswordResetRedirectUrl,
  getSiteUrl,
  parseAuthHash,
  validatePasswordReset,
} from './site';

describe('site auth helpers', () => {
  it('builds a password reset redirect from an explicit site URL', () => {
    expect(getPasswordResetRedirectUrl('https://tonspur.example/')).toBe(
      'https://tonspur.example/passwort-zuruecksetzen',
    );
  });

  it('adds https to bare production domains', () => {
    expect(getSiteUrl('tonspur.example')).toBe('https://tonspur.example');
  });

  it('validates password length and confirmation', () => {
    expect(validatePasswordReset('short', 'short')).toEqual({
      ok: false,
      message: 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.',
    });
    expect(validatePasswordReset('lange-genug', 'anders')).toEqual({
      ok: false,
      message: 'Die Passwörter stimmen nicht überein.',
    });
    expect(validatePasswordReset('lange-genug', 'lange-genug')).toEqual({ ok: true });
  });

  it('parses Supabase hash errors', () => {
    expect(parseAuthHash('#error=access_denied&error_description=Link+ung%C3%BCltig')).toEqual({
      error: 'access_denied',
      errorDescription: 'Link ungültig',
      type: undefined,
    });
  });
});
