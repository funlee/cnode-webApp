import React,{ Component } from 'react';
import ReplyList from 'components/ReplyList/ReplyList';
import './article.scss';
import axios from 'axios';
import { Row, Col, Icon } from 'antd';
import { getDurTime } from 'assets/js/utils';

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar_url: null,
      loginname: null,
      create_at: null,
      visit_count: null,
      title: null,
      content: null,
      reply_count: null,
      last_reply_at: null,
      replies: []
    }
  }
  componentWillMount() {
    const { id } = this.props.match.params
    axios.get(`/topic/${id}`)
    .then(data => {
      const { author: { avatar_url, loginname }, create_at, visit_count, title, content, reply_count, last_reply_at, replies } = data.data
      this.setState({
        avatar_url,
        loginname,
        create_at,
        visit_count,
        title,
        content,
        reply_count,
        last_reply_at,
        replies: [...replies]
      })
    })
  }
  handleGoBack() {
    window.history.back()
  }
  render() {
    const { avatar_url, loginname, create_at, visit_count, title, content, reply_count, last_reply_at, replies } = this.state
    return(
      <div className="article">
        <div className="article-b">
          <Icon type="arrow-left" className="btn-left" onClick={this.handleGoBack.bind(this)} />
          <h4 className="title">帖子详情</h4>
          <span>&nbsp;</span>
          {/* <Icon type="ellipsis" className="btn-right" /> */}
        </div>
        <div className="top">
          <Row>
            <Col span={4}>
              <img src={avatar_url} alt="loginname" />
            </Col>
            <Col span={20}>
              <p className="user-name">{loginname}</p>
              <p className="info">at {getDurTime(create_at)},{visit_count} 次点击</p>
            </Col>
          </Row>
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div dangerouslySetInnerHTML={{ __html: `${content}` }} className="article-text"></div>
          <p className="reply-count">{reply_count} 回复 | 直到 {last_reply_at}</p>
        </div>
        <div className="reply">
          <ReplyList data={replies} />
        </div>
      </div>
    )
  }
}

