import React, { Component } from 'react';
import { render } from 'react-dom';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TestReactForm from '../components/TestReactForm';
import { connect } from 'react-redux';
import { getTodo } from '../action';

class Todo extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.loadTodos()
  }

  render () {
    return (
      <div>
        <AddTodo/>
        <TodoList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTodos: () => {
      dispatch(getTodo())
    }
  }
}

export default connect(null, mapDispatchToProps)(Todo)
