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
