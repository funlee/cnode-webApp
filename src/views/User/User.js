import React,{ Component } from 'react';
import './user.scss';
import axios from 'axios';
import DetailList from 'components/DetailList/DetailList';
import { Icon, Affix, message } from 'antd';

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      avatar_url: null,
      create_at: null,
      loginname: null,
      recent_replies: [],
      recent_topics: [],
      isTopics: true
    }
  }
  componentWillMount() {
    const userId = this.props.match.params.userId
    const url = `/user/${userId}`
    axios.get(url)
    .then(data => {
      const { avatar_url, create_at, loginname, recent_replies, recent_topics } = data.data
      this.setState({
        avatar_url, create_at, loginname, recent_replies, recent_topics,
        isLogin: true
      })
    })
    .catch(error => {
      message.error('请先登录', 2, () => {
        this.props.history.push('/login')
      });
    })
  }
  handleToggleTab() {
    this.setState({
      isTopics: !this.state.isTopics
    })
  }
  handleBack() {
    window.history.back()
  }
  render() {
    const { isLogin, avatar_url, create_at, loginname, recent_replies, recent_topics, isTopics } = this.state
    if (isLogin) {
      return (
        <div className="user">
          <div className="fix-top">
            <span className="go-back" onClick={this.handleBack.bind(this)}>
              <Icon type="left" />
            </span>
            <div className="user-info">
              <div>
                <img src={avatar_url} alt={loginname} />
                <p className="user-name">{loginname}</p>
                <p>加入时间:{create_at ? create_at.slice(0, 10) : null}</p>
              </div>
            </div>
            <div className="tab-sel">
              <span className={isTopics ? 'active' : null} onClick={this.handleToggleTab.bind(this)}>主题</span>
              <span className={isTopics ? null : 'active'} onClick={this.handleToggleTab.bind(this)}>回复</span>
            </div>
          </div>
          <div className="user-detail">
            {
              isTopics ? <div className="detail">
                <DetailList data={recent_topics} />
              </div> : <div className="detail">
                  <DetailList data={recent_replies} />
                </div>
            }
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
