import  { createStore, combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import authentificationReducer from './reducers/authentification'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key:'root',
    storage:AsyncStorage
}

export default createStore(persistReducer(persistConfig, authentificationReducer))