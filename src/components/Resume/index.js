import React from 'react';

function Resume() {
  return (
    <div>
      <h3>Resume</h3>
      <p>Download my <a href="#">resume</a></p>
      <p>Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
        </ul>
      </p>
      <p>Back-end
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL Sequelize</li>
            <li>MongoDB Mongoose</li>
        </ul>
      </p>
    </div>
  );
}

export default Resume;