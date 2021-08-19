import React from 'react';

const Curve = (props) => {
  return props.upper ? (
    <div className="upper-curve">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 50" width="960" height="50" style={{width: '100%', height: '100%'}}>
        <path d="M0 4L26.7 3.3C53.3 2.7 106.7 1.3 160 2.7C213.3 4 266.7 8 320 14.2C373.3 20.3 426.7 28.7 480 31.8C533.3 35 586.7 33 640 31.2C693.3 29.3 746.7 27.7 800 26C853.3 24.3 906.7 22.7 933.3 21.8L960 21L960 51L933.3 51C906.7 51 853.3 51 800 51C746.7 51 693.3 51 640 51C586.7 51 533.3 51 480 51C426.7 51 373.3 51 320 51C266.7 51 213.3 51 160 51C106.7 51 53.3 51 26.7 51L0 51Z" strokeLinecap="round" strokeLinejoin="miter"/>
        <defs>
          <linearGradient id="light-gradient">
            <stop stopColor="#6FDCE8" />
            <stop offset="50%" stopColor="#7AF2FF" />
            <stop offset="100%" stopColor="#2F9CA8" />
          </linearGradient>
          <linearGradient id="dark-gradient">
            <stop stopColor="#7AF2FF"/>
            <stop offset="100%" stopColor="#2F9CA8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ) : (
    <div style={props.style} className="bottom-curve">
      <svg viewBox="0 0 900 53" width="900" height="53" style={{width: '100%', height: '100%'}} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L18.8 3.70001C37.7 7.30001 75.3 14.7 112.8 20.2C150.3 25.7 187.7 29.3 225.2 25.3C262.7 21.3 300.3 9.69999 337.8 11.3C375.3 13 412.7 28 450.2 36.5C487.7 45 525.3 47 562.8 43C600.3 39 637.7 29 675.2 24.3C712.7 19.7 750.3 20.3 787.8 25C825.3 29.7 862.7 38.3 881.3 42.7L900 47V53H881.3C862.7 53 825.3 53 787.8 53C750.3 53 712.7 53 675.2 53C637.7 53 600.3 53 562.8 53C525.3 53 487.7 53 450.2 53C412.7 53 375.3 53 337.8 53C300.3 53 262.7 53 225.2 53C187.7 53 150.3 53 112.8 53C75.3 53 37.7 53 18.8 53H0V0Z" />
        <defs>
          <linearGradient id="light-gradient">
            <stop stopColor="#6FDCE8" />
            <stop offset="50%" stopColor="#7AF2FF" />
            <stop offset="100%" stopColor="#2F9CA8" />
          </linearGradient>
          <linearGradient id="dark-gradient">
            <stop stopColor="#7AF2FF"/>
            <stop offset="100%" stopColor="#2F9CA8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

};

export default Curve;
