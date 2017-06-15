/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

const title = 'ASP.NET Core Starter Kit';
const link = 'https://github.com/kriasoft/aspnet-starter-kit';

import { Button } from '@sketchpixy/rubix';

class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">Welcome to {title}!</h1>
        <p className="mdl-typography--body-1">
          For more information visit <a href={link}>{link}</a>
        </p>
        <h4 className="mdl-typography--title">Articles</h4>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
        <p>
          Adding some Rubix related code:
        </p>
        <div>
          <div><Button bsStyle='green'>Green Button!</Button></div>
          <div><Button bsStyle='red'>Red Button!</Button></div>
          <div><Button bsStyle='blue' outlined>Blue Button!</Button></div>
        </div>
      </Layout>
    );
  }
}

export default Home;
