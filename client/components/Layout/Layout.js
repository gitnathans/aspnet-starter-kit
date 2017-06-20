/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import NetHeader from './Header';
//import s from './Layout.css';

import Footer from '../common/footer';
import Header from '../common/header';


import './main.css';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div>
        <MainContainer>

          <Header />
          <div ref={node => { this.root = node; }}>
            <div>
              <main {...this.props}  />
            </div>
          </div>
        </MainContainer>
      </div>
    );
  }
}

export default Layout;
