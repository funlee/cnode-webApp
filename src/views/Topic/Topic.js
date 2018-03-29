import React,{ Component } from 'react';
import Banner from 'components/Banner/Banner';
import TopicList from 'components/TopicList/TopicList';
import SideLeft from 'components/SideLeft/SideLeft';
import SideRight from 'components/SideRight/SideRight';
import { getCookie } from '../../assets/js/utils';

import './topic.scss';

export default class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRight: false,
      isLeft: false,
      userInfo: {
        avatar_url: null,
        id: null,
        loginname: null
      }
    }
  }
  componentWillMount() {
    const [avatar_url, id, loginname] = getCookie('cnodeuser').split('|');
    this.setState({
      userInfo:{
        avatar_url, id, loginname
      }
    })
  }
  handleLeft() {
    this.setState({
      isLeft: !this.state.isLeft
    })
  }
  handleRight() {
    this.setState({
      isRight: !this.state.isRight
    })
  }
  render() {
    const { isRight, isLeft } = this.state
    let toLR
    if(isRight) {
      toLR = '-23%'
    } else if(isLeft) {
      toLR = '60%'
    } else {
      toLR = 0
    }
    return(
      <div className="topic">
        {
          isLeft ? <SideLeft userInfo={this.state.userInfo} /> : null
        }
        <div className="content" style={{ left: toLR }}>
          <Banner showRight={this.handleRight.bind(this)} showLeft={this.handleLeft.bind(this)}/>
          <TopicList tab={this.props.match.params.id} />
        </div>
        {
          isRight ? <SideRight /> : null
        }
      </div>
    )
  }
}


