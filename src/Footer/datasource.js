import React from 'react';
import './Footer.css';

const FooterDS = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 by &nbsp;
         <a
           href="https://github.com/fdemian"
           target="_blank"
           rel="noopener noreferrer"
          >
          /fdemian
          </a> All Rights
        Reserved
      </span>
    ),
  },
};

export default FooterDS;
