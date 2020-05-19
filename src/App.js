/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Navbar from './Navbar/Navbar';
import ContentHeader from './ContentHeader/ContentHeader';
import Feature7 from './Feature7/Feature7';
import Content5 from './Content5/Content5';
import Content3 from './Content3/Content3';
//import Footer1 from './Footer1';

import NavbarDS from './Navbar/datasource';
import ContentHeaderDS from './ContentHeader/datasource';
import Feature7DS from './Feature7/datasource';
import Content5DS from './Content5/datasource';
import Content3DS from './Content3/datasource';

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
      <Feature7
        id="Feature7_0"
        key="Feature7_0"
        dataSource={Feature7DS}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content5DS}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content3DS}
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
