import React from 'react';
import photo from "../../images/git.png"

function About() {
  return (
    <div>
      <h3 className='page-title'>About Me</h3>
      <img className='sandy' src={photo} />
      <p>Hi! My name is Sandy</p>
    </div>
  );
}

export default About;