import { useEffect, useState } from 'react';
import { logout, getToken } from '@services/auth';
import { AUTH } from '@utils/constants/auth';

export default function useSession({
  redirect = window.location.href.includes('login'),
  redirectPath = '',
  exception = false,
}) {
  const [currentToken, setCurrentToken] = useState(getToken());

  useEffect(() => {
    window.addEventListener('storage', (evt) => {
      const token = evt.storageArea[AUTH.TOKEN];
      setCurrentToken(token);

      if (exception) return;

      const counter = Number(sessionStorage.getItem('counter'));
      if (!counter || counter > 1) return;

      if (!token) {
        logout();
      }
    });
  }, []);

  useEffect(() => {
    const counter = sessionStorage.getItem('counter');

    if (!counter) {
      sessionStorage.setItem('counter', 1);
    }

    return () => {
      sessionStorage.setItem('counter', 0);
    };
  }, []);

  useEffect(() => {
    if (redirect && currentToken) {
      window.location.pathname = redirectPath;
    }
  }, [currentToken, redirect]);

  return [currentToken];
}
