import React,{ Component } from 'react'
import { Icon, Badge } from 'antd';
import './banner.scss';

class Banner extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="banner">
        <Icon type="menu-fold" className="side-btn" />
        <h1 className="title">NodeJS论坛</h1>
        <a href="#" className="bell-info">
          <Badge count={0} showZero>
            <Icon type="bell" className="bell" />
          </Badge>
        </a>
      </div>
    )
  }
}

export default Banner
