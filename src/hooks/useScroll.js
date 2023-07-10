import { useCallback, useEffect } from 'react';

export default function useScroll({ disableScroll = false }) {
  const noScroll = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (disableScroll) window.addEventListener('scroll', noScroll);

    return () => {
      window.removeEventListener('scroll', noScroll);
    };
  }, [disableScroll, noScroll]);

  return { noScroll };
}
