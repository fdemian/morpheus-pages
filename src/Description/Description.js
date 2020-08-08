import React from 'react';
import { Card } from 'antd';
import './Description.css';

const Description = () => {

  return(
  <div className="download-links-wrapper">
    <Card bordered={true}>
      <h1>What is Morpheus?</h1>
      <h2>
        <p>Morpheus is a self hosted blogging solution.</p>
        <p>In classical mythology, <em>Morpheus</em> is the god of dreams and stories that appears in Ovid's <em>Metamorphoses</em></p>
        <p>Morpheus is a self hosted blog.</p>
      </h2>
    </Card>
  </div>
  );
}

export default Description;
