import React from 'react';
import Auxil from '../../../Hoc/Auxil'

const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(oKey => {
            return <li key={oKey}><span style={{textTransform:'Capitalize'}}>{oKey} : {props.ingredients[oKey]}</span></li>
        })

    return (
        <Auxil>
            <p>Burger Contains :</p>
            <ul>
                {ingredients}
            </ul>
            <p>Total Price: {props.totalPrice}$</p>
            <p>Continue to chechout?</p>
        </Auxil>
    )
}

export default OrderSummary;