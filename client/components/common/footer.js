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
      <p>Footer</p>
        <div>
          <Link className="mdl-layout-title" to="/">
          </Link>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
