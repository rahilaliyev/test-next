import Script from 'next/script';

export const GoogleAnalyticsTracking = () => {
  return (
    <>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-J79TEELYRT" />
      <Script id="google-analytics" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J79TEELYRT');`}
      </Script>
      <Script>
      {/* Google Tag Manager */}
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W6KW9F9Z');
        `}
        {/* End Google Tag Manager */}
      </Script>
    </>
  );
};
