import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import './sideLeft.scss';

export default class SideRight extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { avatar_url, id, loginname } = this.props.userInfo;
    return(
      <div className="side-left">
        <div className="top">
          <div className="user-info">
            {
              avatar_url ?
              <NavLink to={`/user/${loginname}`}>
                <img src={decodeURIComponent(avatar_url)} alt={loginname} className="avatar" />
              </NavLink>
              :
              <NavLink to='/login'>
                <div className="avatar no-avatar"></div>
              </NavLink>
            }
            <p>{loginname ? loginname : '请先登录'}</p>
          </div>
        </div>

        <ul className="nav">
          <li><NavLink to={`/user/${loginname}`}><Icon type="meh-o" />个人中心</NavLink></li>
          <li><NavLink to="/not-dev"><Icon type="bell" />消息提醒</NavLink> </li>
          <li><NavLink to="/not-dev"><Icon type="heart-o" />我的收藏</NavLink></li>
          <li><a href="https://github.com/funlee/cnode-webApp" target="_black"><Icon type="question-circle-o" />查看源码</a></li>
        </ul>
      </div>
    )
  }
}

