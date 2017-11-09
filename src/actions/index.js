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
  return (dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/clients/AddEdit`, client)
      .then(({data}) => {
        dispatch({
          type: "UPDATE_CLIENT",
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

export const deleteClient = (clientId) => {
  return(dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/clients/${clientId}/delete`)
      .then(({data}) => {
        dispatch({
          type: "DELETE_CLIENT",
          payload: clientId
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}
