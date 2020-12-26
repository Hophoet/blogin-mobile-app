import {SET_AUTHENTIFICATION_TOKEN, GET_USER_PROFILE} from '../actions'

//set initial state
const initialState = {
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  let newState
  console.log('call auth reducer')
  switch (action.type) {
    case SET_AUTHENTIFICATION_TOKEN:
        const authentificationToken = action.value
        newState = {
            ...state,
            authentificationToken: authentificationToken
        }
        // console.log(newState)
        return newState
    case GET_USER_PROFILE:
        const userProfileObject = action.value
        newState = {
            ...state,
            userProfile:userProfileObject
        }
        return newState
    default:
      return state
    }
}

export default reducer