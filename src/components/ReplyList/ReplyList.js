import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import { getDurTime } from 'assets/js/utils';
import './replyList.scss';

export default class ReplyList extends Component {
  getDOM() {
    const { data } = this.props;
    const listDOM = data.map((d, i) => (
      <div key={`${i}`} className="row-wrap">
        <Row className="list">
          <Col span={4} className="list-left">
            <NavLink to={`/user/${d.author.loginname}`}>
              <img src={d.author.avatar_url} alt={d.author.loginname} />
            </NavLink>
          </Col>
          <Col span={20} className="list-right">
            <p className="list-user">{d.author.loginname}</p>
            <p className="list-time">{i + 1}楼 {getDurTime(d.create_at)}</p>
          </Col>
        </Row>
        <div dangerouslySetInnerHTML={{ __html: `${d.content}` }} className="reply-detail"></div>
      </div>
    ))
    return listDOM
  }
  render() {
    return (
      <div className="reply-list">
        {this.getDOM()}
      </div>
    )

  }
}
