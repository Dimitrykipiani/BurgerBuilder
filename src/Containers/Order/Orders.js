import React from 'react';
import axios from '../../axios-orders';

import Order from '../../Components/Order/Order';

class Orders extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        let fetchedOrders = axios.get('order/getorders')
            .then(response => {
                this.setState({ orders: response.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        const orders = this.state.orders
            .map(order => {
                return <Order
                    ingredients={order.ingredients}
                    totalPrice={order.totalPrice}
                    id = {order.id}
                    time = {order.createDate} />
            })

        return (
            <React.Fragment>
                {orders}
            </React.Fragment>
        )
    }
}

export default Orders;