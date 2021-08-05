import React, { useEffect, useState } from 'react';

export default function BlobBackground() {

  const [isWide, setWide] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setWide(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  
  return (
    <div className="blob-container">
      {isWide ? 
        <svg width="693" height="544" viewBox="0 0 693 544" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M466.951 77.6921C529.18 80.1211 611.766 80.9308 652.481 117.366C693.079 153.801 691.923 225.63 692.27 297.806C692.617 369.866 694.467 442.158 657.801 485.533C621.135 529.024 546.067 543.482 483.492 543.482C420.916 543.482 370.717 529.024 320.055 529.949C269.393 530.99 218.037 547.53 172.002 537.93C125.967 528.445 85.0206 492.82 66.167 448.404C47.3133 403.988 50.3206 350.781 36.325 289.478C22.3293 228.174 -8.78493 158.774 3.36006 102.792C15.6207 46.9248 71.2563 4.47506 131.403 0.773726C191.434 -2.81194 256.091 32.2351 309.298 51.7828C362.62 71.3304 404.723 75.2631 466.951 77.6921Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="692.394" y1="543.483" x2="0.604956" y2="543.483" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F9CA8"/>
              <stop offset="1" stopColor="#67D4E0"/>
            </linearGradient>
          </defs>
        </svg> 
        : 
        <svg width="425" height="637" viewBox="0 0 425 637" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M342.589 37.0453C390.678 73.2503 415.681 137.099 422.41 192.956C429.077 248.826 417.53 296.69 415.554 348.046C413.651 399.45 421.318 454.345 402.607 505.257C383.957 556.156 338.928 603.071 281.998 623.873C225.081 644.736 156.262 639.485 101.836 610.216C47.3973 580.886 7.30312 527.612 1.23645 473.076C-4.81731 418.6 23.1694 362.922 26.1163 302.087C29.0632 241.252 6.9832 175.321 23.8421 121.373C40.6403 67.4387 96.464 25.5958 159.926 8.93101C223.388 -7.73377 294.561 0.827414 342.589 37.0453Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="486.601" y1="582.509" x2="43.8263" y2="676.623" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F9CA8"/>
              <stop offset="1" stopColor="#67D4E0"/>
            </linearGradient>
          </defs>
        </svg>
      }
    </div>
  );
}
