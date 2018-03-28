import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import { getDurTime } from 'assets/js/utils';
import './detailList.scss';

export default class DetailList extends Component {
  constructor(props) {
    super(props)
  }
  getDOM() {
    const { data } = this.props;
    const listDOM = data.map((d, i) => (
      <Row key={`${i}`} className="row-wrap">
        <NavLink to={`/xxxxxxxxx`} className="list">
          <Col span={4} className="list-left">
            <img src={d.author.avatar_url} alt={d.author.loginname} />
          </Col>
          <Col span={20} className="list-right">
            <p className="list-user">{d.author.loginname}</p>
            <p className="list-til">{d.title}</p>
            <p className="list-time">{getDurTime(d.last_reply_at)}</p>
          </Col>
        </NavLink>
      </Row>
    ))
    return listDOM
  }
  render() {
    return (
      <div>
        {this.getDOM()}
      </div>
    )

  }
}
