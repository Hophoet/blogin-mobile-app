import {SET_AUTHENTIFICATION_TOKEN, GET_USER_PROFILE, REMOVE_AUTHENFICATION_TOKEN} from '../actions'

//set initial state
const initialState = {
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  let newState
  // console.log('call auth reducer')
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
        // console.log('call user profile reducer , value:')
        // console.log(userProfileObject)
        newState = {
            ...state,
            userProfile:userProfileObject
        }
        console.log('new state from redux')
        console.log(newState)
        return newState
    case REMOVE_AUTHENFICATION_TOKEN:
        newState = { ...state }
        if(newState.hasOwnProperty('authentificationToken')){
            delete newState.authentificationToken
        }
        // console.log('REMOVE AUTH TOKEN REDUCER')
        // console.log(newState)
        return newState
    default:
      return state
    }
}

export default reducer