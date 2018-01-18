import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import ObjectForm from './ObjectForm';
import { addOrder, updateOrder } from '../actions'

class NewOrder extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeOrder: {
        orderId: 0,
        orderName: "",
        orderStatus: ""
      },
      showDialog: false
    }
    this.handleField = this.handleField.bind(this)
    this.updateOrder = this.updateOrder.bind(this)
    this.editOrder = this.editOrder.bind(this)
  }

  editOrder(orderId){
    this.setState({showDialog: true, activeOrder: this.props.orders.orders.find((order) => {return order.orderId === orderId})})
  }

  handleField(fieldName, event){
    this.setState({activeOrder: Object.assign({}, this.state.activeOrder, {[fieldName]: event.target.value})})
  }

  updateOrder(){
    this.setState({showDialog: false})
    if(this.state.activeOrder.orderId == 0){
      this.props.addOrder(this.state.activeOrder)
    }else{
      this.props.updateOrder(this.state.activeOrder)
    }

    this.props.history.push('/orders')
  }

  render(){
    return(
          <div>
            <ObjectForm
               object={this.state.activeOrder}
               title="Edit Order"
               fieldHandler={this.handleField}
               submitHandler={this.updateOrder}
               hiddenFields={["orderId"]}
             />
          </div>
        )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addOrder: addOrder,
    updateOrder: updateOrder
  }, dispatch)
}

const ConnectedNewOrder = connect(null, mapDispatchToProps)(NewOrder)

export default ConnectedNewOrder
