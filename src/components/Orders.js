import React from 'react';
import axios from 'axios';
import {VanillaPuddingApi} from '../components/constants';

class Orders extends React.Component {
  constructor(props){
    super(props)

    this.state={
      orders: []
    }
  }
  componentDidMount(){
    axios
      .get(`${VanillaPuddingApi}/orders`)
      .then(({data}) => {
        this.setState({orders: data})
      })
      .catch((errors)=>{
        console.log(errors)
      })
    }


  render() {
    let showOrders = this.state.orders.map((element) => {
        return(
          <li>
            {element.orderName}
          </li>
        )
    })

    return (
      <div>
        <h3>Orders:</h3>
        <ul>
          {showOrders}
        </ul>
      </div>
    );
  }
}

export default Orders;
