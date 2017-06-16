/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/254
 */

import React from 'react';
import Header from './Header';
//import s from './Layout.css';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => { this.root = node; }}>
        <div className="mdl-layout__inner-container">
          <div className="Layout_ribbon_v45">
            <Header />
            <div>
              <h1 className={`mdl-typography--title `}>ASP.NET Core Starter Kit</h1>
              <p className={`mdl-typography--body-1 `}>
                Single-page application boilerplate powered by .NET Core and React
              </p>
            </div>
          </div>
          <main {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Layout;
