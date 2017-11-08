export const manageClients = (state={
                                      clients:[], editClient: {
                                                                client: {
                                                                  clientId: 0,
                                                                  emailAddress: "",
                                                                  name: "",
                                                                  notes: "",
                                                                  phoneNumber: ""
                                                            },
                                                                showDialog: false}
},
action) => {
  switch (action.type) {
    case "GET_CLIENTS":
      return Object.assign({}, state, {clients: action.payload})
    case "EDIT_CLIENT":
      var client = {};
      // make a new one
      if(action.payload === 0){
        client = {
          clientId: 0,
          emailAddress: "",
          name: "",
          notes: "",
          phoneNumber: ""
        }
      }
      //find the client
      else{
        client = state.clients.find((c) => {
          return c.clientId === action.payload;
        })
      }
      return Object.assign({}, state, {editClient: {client: client, showDialog: true}} )
    default:
      return state
  }
}
