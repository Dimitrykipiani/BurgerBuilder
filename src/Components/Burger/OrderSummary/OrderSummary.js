import React from 'react';
import Auxil from '../../../Hoc/Auxil'
import Button from '../../UI/Button/Button'

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
            <p>Total Price: {props.totalPrice.toFixed(2)}$</p>
            <p>Continue to chechout?</p>
            <Button clicked={props.removeModal} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchace} btnType="Success">Continue</Button>
        </Auxil>
    )
}

export default OrderSummary;