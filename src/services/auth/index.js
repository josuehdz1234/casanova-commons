import { AUTH } from '@utils/constants/auth';

export function logout() {
  localStorage.removeItem(AUTH.TOKEN);
  window.location.reload();
}

export function getToken() {
  return localStorage.getItem(AUTH.TOKEN);
}
