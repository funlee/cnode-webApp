import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sideRight.scss';

export default class SideRight extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <nav className="side-right">
        <ul className="nav">
          <li><NavLink to="/topic/all">全部</NavLink></li>
          <li><NavLink to="/topic/good">精华</NavLink></li>
          <li><NavLink to="/topic/share">分享</NavLink></li>
          <li><NavLink to="/topic/ask">问答</NavLink></li>
          <li><NavLink to="/topic/job">招聘</NavLink></li>
        </ul>
      </nav>
    )
  }
}


