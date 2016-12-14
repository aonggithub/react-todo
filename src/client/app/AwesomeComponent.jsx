import React, {Component, PropTypes } from 'react';

class AwesomeComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }
  
  static propTypes: {
    name: PropTypes.string
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render () {
  console.log(this.props);
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    )
  }
}

export default AwesomeComponent;
