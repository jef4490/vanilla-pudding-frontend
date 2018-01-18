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

export function updateClient(client){
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

export function addClient(client){
  debugger
  return (dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/clients/AddEdit`, client)
      .then(({data}) => {
        dispatch({
          type: "ADD_CLIENT",
          payload: data
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
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

export function getOrders(){
  return (dispatch) => {
    axios
      .get(`${VanillaPuddingApi}/orders`)
      .then(({data}) => {
        debugger
        dispatch({
          type: "GET_ORDERS",
          payload: data
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}

export function updateOrder(order){
  return (dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/orders/AddEdit`, order)
      .then(({data}) => {
        dispatch({
          type: "UPDATE_ORDER",
          payload: data
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}

export function addOrder(order){
  return (dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/orders/AddEdit`, order)
      .then(({data}) => {
        dispatch({
          type: "ADD_ORDER",
          payload: data
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}

export const deleteOrder = (orderId) => {
  return(dispatch) => {
    axios
      .post(`${VanillaPuddingApi}/orders/${orderId}/delete`)
      .then(({data}) => {
        dispatch({
          type: "DELETE_ORDER",
          payload: orderId
        })
      })
      .catch((errors)=>{
        console.log(errors)
      })
  }
}
