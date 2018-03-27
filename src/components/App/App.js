import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import Banner from 'components/Banner/Banner';
import getRouter from 'router/router';

import 'assets/js/axiosConfig';

import './app.scss';
import 'antd/dist/antd.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <Nav />
        {getRouter()}
      </div>
    )
  }
}
