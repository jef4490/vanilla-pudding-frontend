export const manageClients = (state={clients:[]}, action) => {
  switch (action.type) {
    case "GET_CLIENTS":
      return Object.assign({}, state, {clients: action.payload})
    default:
      return state
  }
}
