import React from 'react';

import Classes from './Order.module.css'

const Order = (props) => {
    return (
        <div className={Classes.Order}>
            <div >CreateTime-{props.time}</div>
            <p >ID-{props.id}</p>
            <p > Ingredients:
                <span className={Classes.Unit}>Meat-({props.ingredients.meat})</span>
                <span className={Classes.Unit}>Cheese-({props.ingredients.cheese})</span>
                <span className={Classes.Unit}>Bacon-({props.ingredients.baon})</span>
                <span className={Classes.Unit}>Salad-({props.ingredients.salad})</span>
                 </p>
            <p>Price - <strong>{props.totalPrice}$</strong></p>
        </div>
    )
}

export default Order;