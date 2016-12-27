import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { addTodo } from '../action';
import { saveTodo } from '../action';
import Validation from 'react-validation';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import validator from 'validator';

class AddTodo extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {value: '', errorMessage: ''};

    this.handleChangeRequired = this.handleChangeRequired.bind(this);
  }

  handleChangeRequired(event){
    this.setState({value: event.target.value});
    if(!validator.isEmpty(event.target.value)){
      this.setState({errorMessage: ''})
    }else{
      this.setState({errorMessage: 'Todo task is required'})
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={ e =>{
            e.preventDefault()
            this.props.onClick(this.state.value)
            this.state.value = ''
          }}>
            <div>
              <TextField
               onChange={this.handleChangeRequired}
               floatingLabelText="Floating Label Text"
               errorText={this.state.errorMessage}
               />
            </div>
            <br />
            <div>
              <RaisedButton
                type="submit"
                label ="Add Todo"
                primary={true}
                disabled = {this.state.value == ''}/>
              <RaisedButton onClick={ e=>{
                  e.preventDefault()
                  this.props.onClickSaveTodo(this.props.todos)
                }}
                label="Save Todo"
                secondary={true}/>
            </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (input) => {
      dispatch(addTodo(input));
    },
    onClickSaveTodo: (todos) => {
      dispatch(saveTodo(todos));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
