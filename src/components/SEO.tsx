import Helmet from 'react-helmet';
import React from 'react';

export default function SEO() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <html lang="en"/>
      {/* Primary Meta Tags */}
      <title>Pol Tedesko | Front End Developer</title>
      <meta name="description" content="Personal Portfolio Website"/>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://poltedesko-portfolio.netlify.app/"/>
      <meta property="og:title" content="Pol Tedesko | Front End Developer"/>
      <meta property="og:description" content="Personal Portfolio Website"/>
      <meta property="og:image" content="https://poltedesko-portfolio.netlify.app/og-img.gif"/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://poltedesko-portfolio.netlify.app/"/>
      <meta property="twitter:title" content="Pol Tedesko | Front End Developer"/>
      <meta property="twitter:description" content="Personal Portfolio Website"/>
      <meta property="twitter:image" content="https://poltedesko-portfolio.netlify.app/og-img.gif"/>

      <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="./favicon-16x16.png" sizes="16x16"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Helmet>
  );
}
