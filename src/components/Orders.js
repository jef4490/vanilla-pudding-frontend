import React from 'react';
import axios from 'axios';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'

import {VanillaPuddingApi} from '../components/constants';
import { getOrders, editOrder, updateOrder, deleteOrder, addOrder } from '../actions'
import ClientDataTable from './ClientDataTable';
import ObjectForm from './ObjectForm';

class Orders extends React.Component {
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
  }

  componentDidMount() {
    this.props.getOrders()
    }

  render() {
    return (
      <div>

        <Link to={'/orders/new'}>
          <Button raised color="primary"  style={{marginTop: "1em"}}>
           Create New Order
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    orders: state.orders
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getOrders: getOrders,
    deleteOrder: deleteOrder,
    updateOrder: updateOrder,
    addOrder: addOrder
  }, dispatch)
}

const ConnectedOrders = connect(mapStateToProps, mapDispatchToProps)(Orders)

export default ConnectedOrders
