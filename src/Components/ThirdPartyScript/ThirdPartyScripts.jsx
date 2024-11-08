import { useEffect } from 'react';

const ThirdPartyScripts = () => {
  useEffect(() => {
    // Load Phosphor Icons
    const phosphorScript = document.createElement('script');
    phosphorScript.src = "https://unpkg.com/phosphor-icons";
    phosphorScript.async = true;
    document.body.appendChild(phosphorScript);

    // Load Tawk.to chat widget
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    const tawkScript = document.createElement('script');
    tawkScript.src = 'https://embed.tawk.to/65311f63f2439e1631e617bf/default';
    tawkScript.async = true;
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

    // Google Analytics
    const gtagScript1 = document.createElement('script');
    gtagScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-9BD1MT6XPY";
    gtagScript1.async = true;
    document.body.appendChild(gtagScript1);

    const gtagScript2 = document.createElement('script');
    gtagScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9BD1MT6XPY');
    `;
    document.body.appendChild(gtagScript2);

    // Clean up the scripts when the component is unmounted
    return () => {
      document.body.removeChild(phosphorScript);
      document.body.removeChild(tawkScript);
      document.body.removeChild(gtagScript1);
      document.body.removeChild(gtagScript2);
    };
  }, []);

  return null; // This component only adds scripts, no UI
};

export default ThirdPartyScripts;
