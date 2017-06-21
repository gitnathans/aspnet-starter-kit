/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import Navigation from '../Layout/Navigation';
import Logo from '../Layout/Logo';

import '../Layout/main.css';

import { SidebarBtn, Navbar, Nav, NavItem, Icon, Grid, Row, Col } from '@sketchpixy/rubix';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header
        ref={node => { this.root = node; }}
      >
        <Grid id='navbar' {...this.props}>
          <Row>
            <Col xs={12}>
              <Navbar fixedTop fluid id='rubix-nav-header'>
                <Row>
                <Col xs={3} visible='xs'>
                  <SidebarBtn />
                </Col>
                <Col xs={6} sm={4}>
                  <Brand />
                </Col>
                <Col xs={3} sm={8} collapseRight className='text-right'>
                  <HeaderNavigation />
                </Col>
                </Row>
              </Navbar>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }

}



class Brand extends React.Component {
  render() {
    return (
      <Navbar.Header {...this.props}>
        <Navbar.Brand tabIndex='-1'>
          <a href='#'>
            <img src='/imgs/common/logo.png' alt='rubix' width='111' height='28' />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}

class HeaderNavigation extends React.Component {
  render() {


    return (
      <Nav>
        <NavItem className='logout' href='#'>
          <Icon bundle='fontello' glyph='off-1' />
        </NavItem>
      </Nav>
    );
  }
}

export default Header;
