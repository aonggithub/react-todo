const todos = ( state = [], action) => {

//function todos (state = [], action){
//  console.log(Object.assign([], state, {text: action.text}))


  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        function(t){
          if(t.id !== action.id){
            return t
          }

          return Object.assign({}, t, {
            completed: !t.completed
          })
        }
      )

    case 'REMOVE_TODO':
      return action.payload

    case 'GET_TODO':
      return action.payload

    default:
      return state
  }
}

export default todos
