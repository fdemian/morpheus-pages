import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import './Footer.css';

const Footer = (props) => {
 const { dataSource } = props;

 return (
 <div {...props} {...dataSource.wrapper}>
   <OverPack {...dataSource.OverPack}>
      <TweenOne
         animation={{ y: '+=30', opacity: 0, type: 'from' }}
         key="copyright"
         {...dataSource.copyrightWrapper}
      >
        <div {...dataSource.copyrightPage}>
          <div {...dataSource.copyright}>
            {dataSource.copyright.children}
          </div>
        </div>
       </TweenOne>
    </OverPack>
  </div>
  );
}

export default Footer;
