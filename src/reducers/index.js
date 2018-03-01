import {manageClients} from './manageClients'
import {manageOrders} from './manageOrders'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  clients: manageClients,
  orders: manageOrders
})

export default rootReducer
