/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Navbar from './Navbar/Navbar';
import ContentHeader from './ContentHeader/ContentHeader';
import FeatureList from './FeatureList/FeatureList';
import DownloadLinks from './DownloadLinks/DownloadLinks';
import InstallSteps from './InstallSteps/InstallSteps';
import Footer from './Footer/Footer';

import NavbarDS from './Navbar/datasource';
import ContentHeaderDS from './ContentHeader/datasource';
import FeatureListDS from './FeatureList/datasource';
import FooterDS from './Footer/datasource';

import './App.css';

let isMobile;
enquireScreen((b) => { isMobile = b; });

const { location } = window;

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {

      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }

  }

  render() {

    const children = [
      <Navbar
        id="Nav0_0"
        key="Nav0_0"
        dataSource={NavbarDS}
        isMobile={this.state.isMobile}
      />,
      <ContentHeader
        id="Content13_0"
        key="Content13_0"
        dataSource={ContentHeaderDS}
        isMobile={this.state.isMobile}
      />,      
      <FeatureList
        id="Feature7_0"
        key="Feature7_0"
        dataSource={FeatureListDS}
        isMobile={this.state.isMobile}
      />,
      <DownloadLinks />,
      <InstallSteps />,
      <Footer
        id="Footer1_0"
        key="Footer1_0"
        dataSource={FooterDS}
        isMobile={this.state.isMobile}
      />
    ];

    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
