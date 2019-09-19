const initialState = {
  visibilityFilter: false,
  todos: [],
  navBar: false,
}

const iseWebsite = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_Navbar':
      return {
        ...state,
        navBar: !state.navBar
      }
    case 'OPEN_Navbar':
      return {
        ...state,
        navBar: true
      }
    case 'CLOSE_Navbar':
      return {
        ...state,
        navBar: false
      }
    default:
      return state
  }
}

export default iseWebsite
