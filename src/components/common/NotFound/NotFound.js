import React, {Component} from 'react';
import './notFound.scss';
import { Icon } from 'antd';

export default class NotFound extends Component {
  handleGoBack() {
    window.history.back()
  }
  render() {
    return (
      <section>
        <div className="tb">
          <Icon type="arrow-left" className="btn-left" onClick={this.handleGoBack.bind(this)} />
        </div>
        <div className="not-found">
          <div className="error">404</div>
          <br />
          <br />
          <br />
          <br />
          <span className="info">File not found</span>
        </div>
      </section>

    )
  }
}
