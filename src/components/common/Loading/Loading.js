import React, {Component} from 'react';
import './loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loader">
          <div className="ball-clip-rotate-pulse">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}
