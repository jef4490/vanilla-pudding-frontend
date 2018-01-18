export const manageOrders = (state={
                                      orders:[]
}, action) => {
  switch (action.type) {

    case "GET_ORDERS":
      return Object.assign({}, state, {orders: action.payload})

    case "UPDATE_ORDER":
      //order exists
        return Object.assign({}, state, {orders: state.orders.map((order) => {
        if(order.orderId === action.payload.orderId){
          return Object.assign({}, order, action.payload)
        } else {
          return order
        }
      })})

      case "ADD_ORDER":
          return Object.assign({}, state, {orders: [...state.orders, action.payload]})

      case "DELETE_ORDER":
      return Object.assign({}, state, {orders: state.orders.filter((order) => {
        return order.orderId !== action.payload;
      })})

    default:
      return state
  }
}
