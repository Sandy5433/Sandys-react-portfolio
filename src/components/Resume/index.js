import React from 'react';

function Resume() {
  return (
    <div>
      <h3 className='page-title'>Resume</h3>
      <p>Download my <a href="https://github.com/Sandy5433">resume</a></p>
      <p>Front-end Proficiencies
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
        </ul>
      </p>
      <p>Back-end Proficiencies
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
      </p>
    </div>
  );
}

export default Resume;