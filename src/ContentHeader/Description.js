import React from 'react';
import './Description.css';
import imgSrc from '../morpheus-image.jpg';

const Description = () => {

  return(
  <div className="download-links-wrapper">
      <h1>What is Morpheus?</h1>
      <br />
      <img src={imgSrc} alt="Morpheus" />
      <h2>
        <br />
        <p>
          Morpheus is a self hosted blogging solution.
        </p>
        <br />
        <p>
          The name is taken from classical mythology.
        </p>
        <p>
          <em>Morpheus</em> is the god of dreams and stories that appears in Ovid's <em>Metamorphoses.</em>
        </p>
      </h2>
  </div>
  );
}

export default Description;
