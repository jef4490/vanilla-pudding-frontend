import axios from 'axios'
import {VanillaPuddingApi} from '../components/constants'

export function getClients(){
  return (dispatch) => {
    axios
      .get(`${VanillaPuddingApi}/clients`)
      .then(({data}) => {
        dispatch({
          type: "GET_CLIENTS",
          payload: data
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}

export function submitActiveClient(client){
  debugger;
  return (dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/clients/AddEdit`, client)
      .then(({data}) => {
        dispatch({
          type: "GET_CLIENTS",
          payload: data
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}

export const editClient = (clientId) => {
  return{
    type: "EDIT_CLIENT",
    payload: clientId
  }
}
