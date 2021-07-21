/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'portfolio'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
        shared: path.join(__dirname, 'src/shared')
      }
    }
  ]
};