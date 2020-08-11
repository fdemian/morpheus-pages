import React from 'react';
import logo from '../logo.png'

 const Content13 = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: <img alt="blog-logo" src={logo} width={200} />,
        className: 'title-h1'
      }
    ],
  },
};

export default Content13;
