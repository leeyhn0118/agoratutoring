import { useEffect, useState } from 'react';

const useScript = (url, name, options = {}) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (!loaded && !loading) {
      let preloaded = false;
      for (const script of document.scripts) {
        if (window.useScript && window.useScript[name] !== undefined) {
          preloaded = true;

          if (window.useScript[name] === true) {
            setLoaded(true);
          } else {
            script.addEventListener('load', handleLoad);
            return () => script.removeEventListener('load', handleLoad);
          }
        }
      }

      if (!preloaded) {
        setLoading(true);
        const script = document.createElement('script');

        window.useScript = { ...window.useScript, [name]: false };

        script.src = url;
        script.async = !!options.async;
        script.defer = !!options.defer;

        script.onload = () => {
          window.useScript = { ...window.useScript, [name]: true };
          setLoaded(true);
          setLoading(false);
        };

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }
    }
    return undefined;
  }, [url, options, loading, loaded, name]);

  return { loading, loaded };
};

export default useScript;
