import React, { Component, PropTypes } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends Component{
  constructor (props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onChange(e.target.value);
  }

  render () {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <div>
        <label>
          Enter temparature in {scaleNames[scale]}:
          <input value={value} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default TemperatureInput
