import axios from 'axios';

let nextTodoId = 1;

const API_URL = 'http://localhost:3000/api';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const saveTodo = (todos) => {
  return function(dispatch){

  axios.post(`${API_URL}/saveTodo`, {todos:todos.filter(todo => todo.completed == false)})
    .then(response =>{
      dispatch({
        type: 'REMOVE_TODO',
        payload: todos.filter(todo => todo.completed == false)
      })
      console.log("Save success");
    })
  }
}

export const getTodo = () => {
  return function(dispatch){
    axios.get(`${API_URL}/getTodo`)
    .then(response =>{
      let data = response.data.data;
      if( data.length > 0 ){
        nextTodoId = parseInt(data[data.length-1].id) +1;
        data.map(t =>
          t.completed = false
        )
      }

      dispatch({
        type: 'GET_TODO',
        payload: data
      });
    })
  }
}
