import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { addTodo } from '../action';
import { saveTodo } from '../action';
import Validation from 'react-validation';


class AddTodo extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render () {
    let input
    return (
      <div>
        <Validation.components.Form onSubmit={ e =>{
            e.preventDefault()
            this.props.onClick(input.value)
            input.value = ''
          }}>
            <Validation.components.Input name="todo"
              type="text"
              ref = {(ref) =>
                input = ref
              }
              value=""
              errorClassName="is-invalid-input"
              containerClassName=""
              validations={['required']}
              />
            <button type="submit"
              className="ui-button ui-widget ui-corner-all">
              Add Todo
            </button>
            <a href="#" onClick={ e=>{
                e.preventDefault()
                this.props.onClickSaveTodo(this.props.todos)
              }}
              className="ui-button ui-widget ui-corner-all"
              >Save Todo</a>
          </Validation.components.Form>
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
      dispatch(addTodo(input))
    },
    onClickSaveTodo: (todos) => {
      dispatch(saveTodo(todos));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
