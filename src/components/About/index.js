import React from 'react'
import Avatar from '../assets/images/avatar.jpg';

const About = () => {
  return (
    <div classname='main'>
      <h2 className='nav-heading'>About</h2>
      <div className='about'>
        <div>
          <img src={Avatar} alt='Images of RD' className='avatar' />
        </div>
        <div>
          <h3 className="about-heading">Hi, I'm Raymond Dover</h3>
          <p className='about-me'>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;