/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import rubixStyle from './main.css';
import { Button } from '@sketchpixy/rubix';


class About extends React.Component {

  componentDidMount() {
    document.title = 'About Us';
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">About Us</h1>
        <p className="mdl-typography--body-1">
          Coming soon.
        </p>
        <div><Button bsStyle='green'>Green Button!</Button></div>
      </Layout>
    );
  }

}

export default About;
