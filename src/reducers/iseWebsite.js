const initialState = {
  visibilityFilter: false,
  todos: [],
  navBar:false,
}

const iseWebsite = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_Navbar':
      return {
        ...state,
        navBar:!state.navBar
      }
  default:
    return state
  }
}

export default iseWebsite
