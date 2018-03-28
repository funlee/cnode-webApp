import React, {Component} from 'react';

import getRouter from 'router/router';
import 'assets/js/axiosConfig';

import './app.scss';
import 'antd/dist/antd.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {getRouter()}
      </div>
    )
  }
}
