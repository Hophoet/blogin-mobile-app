import {SET_AUTHENTIFICATION_TOKEN} from '../actions'

//set initial state
const initialState = {
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  console.log('call auth reducer')
  switch (action.type) {
    case SET_AUTHENTIFICATION_TOKEN:
        const authentificationToken = action.value
        let newState = {
            ...state,
            authentificationToken: authentificationToken
        }
        // console.log(newState)
        return newState
    default:
      return state
    }
}

export default reducer