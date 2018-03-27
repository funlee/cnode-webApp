import React,{ Component } from 'react';
import TopicList from 'components/TopicList/TopicList';
import './topics.scss';

export default class Topics extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="topic">
        <TopicList tab={this.props.match.params.id} />
      </div>
    )
  }
}


