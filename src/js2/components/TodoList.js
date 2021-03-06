import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { toggleTodo } from '../action'
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from '../containers/MobileTearSheet';

class TodoList extends Component {
  constructor (props, context) {
    super(props, context);
  }
  render () {
    return (
      <MobileTearSheet>
        <List>
          {this.props.todos.map(todo =>
            <ListItem  key={todo.id}
              style={{
                 textDecoration: todo.completed ? 'line-through' : 'none',
                 backgroundColor: todo.completed ? 'red' : '',
                 color: todo.completed ? 'white' : ''
               }}
              onClick={() => this.props.clickToToggleTodo(todo.id)}
              primaryText={todo.text}
               />
          )}
        </List>
      </MobileTearSheet>
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
