import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><NavLink to="/all">全部</NavLink></li>
        <li><NavLink to="/good">精华</NavLink></li>
        <li><NavLink to="/share">分享</NavLink></li>
        <li><NavLink to="/ask">问答</NavLink></li>
        <li><NavLink to="/job">招聘</NavLink></li>
      </ul>
    )
  }
}
