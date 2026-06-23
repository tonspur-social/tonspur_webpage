export const PASSWORD_RESET_REQUEST_PATH = '/passwort-vergessen';
export const PASSWORD_RESET_UPDATE_PATH = '/passwort-zuruecksetzen';

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export function getSiteUrl(explicitSiteUrl?: string, origin?: string): string {
  const explicit = explicitSiteUrl?.trim();

  if (explicit) {
    const withProtocol = /^https?:\/\//i.test(explicit) ? explicit : `https://${explicit}`;
    return trimTrailingSlash(withProtocol);
  }

  if (origin?.trim()) {
    return trimTrailingSlash(origin.trim());
  }

  if (typeof window !== 'undefined' && window.location.origin) {
    return trimTrailingSlash(window.location.origin);
  }

  return 'http://localhost:5173';
}

export function getPasswordResetRedirectUrl(explicitSiteUrl?: string, origin?: string): string {
  return `${getSiteUrl(explicitSiteUrl, origin)}${PASSWORD_RESET_UPDATE_PATH}`;
}

export type PasswordValidationResult = {
  ok: boolean;
  message?: string;
};

export function validatePasswordReset(
  password: string,
  confirmation: string,
): PasswordValidationResult {
  if (password.length < 8) {
    return { ok: false, message: 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.' };
  }

  if (password !== confirmation) {
    return { ok: false, message: 'Die Passwörter stimmen nicht überein.' };
  }

  return { ok: true };
}

export type AuthHashState = {
  error?: string;
  errorDescription?: string;
  type?: string;
};

export function parseAuthHash(hash: string): AuthHashState {
  const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
  const params = new URLSearchParams(cleanHash);

  return {
    error: params.get('error') ?? undefined,
    errorDescription:
      params.get('error_description')?.replace(/\+/g, ' ') ??
      params.get('error_code') ??
      undefined,
    type: params.get('type') ?? undefined,
  };
}
