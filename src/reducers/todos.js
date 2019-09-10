const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('hey?')
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'ADD_TODODO':
      console.log('wow')
      console.log(action.text) 
      return [
        ...state
      ]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
   

    default:
      return state
  }
}

export default todos
