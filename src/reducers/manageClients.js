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
}, action) => {
  switch (action.type) {

    case "GET_CLIENTS":
      return Object.assign({}, state, {clients: action.payload, editClient: {
                                client: {
                                  clientId: 0,
                                  emailAddress: "",
                                  name: "",
                                  notes: "",
                                  phoneNumber: ""
                                },
                                showDialog: false}
                              })

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

    case "UPDATE_CLIENT":
      //client exists
      if(action.payload.clientId != 0){
        return Object.assign({}, state, {clients: state.clients.map((client) => {
        if(client.clientId === action.payload.clientId){
          return Object.assign({}, client, action.payload)
        } else {
          return client
        }
      }), editClient: {client: action.payload, showDialog: false}})
      }

      else{
          return Object.assign({}, state, {clients: [...state.clients, action.payload]})
      }

      case "DELETE_CLIENT":
      return Object.assign({}, state, {clients: state.clients.filter((client) => {
        return client.clientId !== action.payload;
      })})

    default:
      return state
  }
}
