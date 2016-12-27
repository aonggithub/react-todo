import React, { Component } from 'react';
import { render } from 'react-dom';

class MobileTearSheet extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
      <div style=
          {{marginLeft:'0px'
            , padding:'20px 56px 16px 10px'
            , position: 'relative'
            , maxWidth: '360px'
          }}>
          <div style={{
                padding: '8px 0px'
              , borderWidth: '1px'
              , borderStyle:'solid'
              , borderColor: 'rgb(217, 217, 217) rgb(217, 217, 217)'
              , borderImage: 'none'
              , overflow: 'hidden'
            }}>
              {this.props.children}
          </div>
      </div>
    )
  }
}


export default (MobileTearSheet)
