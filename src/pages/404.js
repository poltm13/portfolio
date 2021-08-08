import * as React from 'react';

import { Link } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  textAlign: 'center'
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const paragraphStyles = {
  marginBottom: 48,
  textAlign: 'center'
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>404 - Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/" style={{color: '#2f9ca8', cursor: 'pointer', textDecoration: 'none'}}>Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
