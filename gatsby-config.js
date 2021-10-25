/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
        shared: path.join(__dirname, 'src/shared')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pol Tedesko | Front End Developer',
        short_name: 'Portfolio',
        start_url: '/',
        display: 'standalone',
        icon: 'static/pwa-icon.png',
        theme_color: '#2f9ca8',
        background_color: '#121212',
        icon_options: {
          purpose: 'any maskable'
        }
      }
    },
    'gatsby-plugin-offline'
  ]
};