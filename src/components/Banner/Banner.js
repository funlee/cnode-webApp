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
        <Icon type="menu-fold" className="btn-left" onClick={this.props.showLeft}/>
        <h4 className="title">cnode</h4>
        <Icon type="ellipsis" className="btn-right" onClick={this.props.showRight}/>
      </div>
    )
  }
}

export default Banner
