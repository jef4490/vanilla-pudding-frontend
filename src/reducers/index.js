import {manageClients} from './manageClients'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  clients: manageClients
})

export default rootReducer
