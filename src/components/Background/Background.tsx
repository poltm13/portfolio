import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';

const Background = () => {
  
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="20" />
          <feColorMatrix
            in="blur"
            //      R G B a offset
            values="1 0 0 0 0   
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 100 -16"
          />
        </filter>
      </svg>
      {/* 
      // TODO: Finish this
       */}
      <div className="backgroundBlobs">
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="bg-blob" style={{width: '40px', height: '40px', top: '90%', left: '90%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="bg-blob" style={{width: '100px', height: '100px', top: '90%', left: '90%'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="bg-blob move-y" style={{width: '50px', height: '50px', top: '90%', left: '68%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="bg-blob move-x" style={{width: '30px', height: '30px', top: '88%', left: '70%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="bg-blob" style={{width: '30px', height: '30px', top: '93%', left: '70%'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.1}>
          <div className="bg-blob" style={{width: '35px', height: '35px', top: '60%', left: '40%'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5}>
          <div className="bg-blob" style={{width: '50px', height: '50px', top: '10%', left: '85%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="bg-blob" style={{width: '35px', height: '35px', top: '10%', left: '82%'}}></div>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.5}>
          <div className="bg-blob move-x" style={{width: '50px', height: '50px', top: '95%', left: '68%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="bg-blob move-y" style={{width: '50px', height: '50px', top: '93%', left: '70%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="bg-blob move-y" style={{width: '50px', height: '50px', top: '95%', left: '70%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="bg-blob move-x" style={{width: '50px', height: '50px', top: '93%', left: '68%'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={2}>
          <div className="bg-blob" style={{width: '35px', height: '35px', top: '93%', left: '70%'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.1}>
          <div className="bg-blob" style={{width: '35px', height: '35px', top: '60%', left: '20%'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.5}>
          <div className="bg-blob" style={{width: '50px', height: '50px', top: '10%', left: '60%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <div className="bg-blob" style={{width: '35px', height: '35px', top: '10%', left: '58%'}}></div>
        </ParallaxLayer>
      </div>
    </>
  );
};

export default Background;