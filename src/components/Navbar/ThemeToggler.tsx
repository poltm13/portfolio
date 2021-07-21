import { Moon, Sun } from 'assets/index';
import React, { useEffect, useState } from 'react';

export default function ThemeToggler(props) {
  const [darkTheme, setTheme] = useState(
    // typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
    false
  );

  useEffect(() => {
    document.querySelector('body').classList.toggle('dark-mode', darkTheme);
  }, [darkTheme]);

  const toggler: React.CSSProperties = {
    width: '45px',
    height: '22px',
    background: '#7af2ff ',
    right: '0',
    borderRadius: '20px',
    transform: 'translate(-100%, -50%)',
    cursor: 'none'
  };

  const togglerDark: React.CSSProperties = {
    background: '#2f9ca8'
  };

  const toggle: React.CSSProperties = {
    background: 'url(' + Sun + ') 0% 0% / 17px',
    width: '17px',
    height: '17px',
    position: 'absolute',
    borderRadius: '50%',
    top: '0',
    transform: 'translate(2.5px, 2.5px)',
    transition: 'all .3s',
    left: '0'
  };

  const toggleDark: React.CSSProperties = {
    background: 'url(' + Moon + ') 0% 0% / 17px',
    transform: 'translate(25.5px, 2.5px)'
  };

  const toggleHandler = () => {
    setTheme(!darkTheme);
  };

  return (
    <div
      style={darkTheme ? { ...toggler, ...togglerDark } : toggler}
      className={props.className}
      onClick={toggleHandler}
    >
      <div
        style={darkTheme ? { ...toggle, ...toggleDark } : toggle}
        className="switch"
      ></div>
    </div>
  );
}
