import {SET_AUTHENTIFICATION_TOKEN} from './actions'

//set initial state
const initialState = {
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTIFICATION_TOKEN:
        const authentificationToken = action.value
      return {
        ...state,
        authentificationToken: authentificationToken
      }
    default:
      return state
    }
}

export default reducer