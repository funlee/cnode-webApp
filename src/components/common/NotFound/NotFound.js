import React, {Component} from 'react';
import './notFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="error">404</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="info">File not found</span>
      </div>
    )
  }
}
