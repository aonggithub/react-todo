import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { toggleTodo } from '../action'

class TodoList extends Component {
  constructor (props, context) {
    super(props, context);
  }
  render () {
    return (
      <div>
        <ul id="sortable">
          {this.props.todos.map(todo =>
            <li key={todo.id}
              style={{
                 textDecoration: todo.completed ? 'line-through' : 'none'
               }}
              onClick={() => this.props.clickToToggleTodo(todo.id)}
              className="ui-state-default"
               >
              <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>
              {todo.text}
            </li>
          )}
        </ul>
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
    clickToToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
