import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Auxil from '../../../Hoc/Auxil/Auxil'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    ingredients = Object.keys(this.props.ingredients)
        .map(oKey => {
            return <li key={oKey}><span style={{ textTransform: 'Capitalize' }}>{oKey} : {this.props.ingredients[oKey]}</span></li>
        });
        
    componentDidUpdate(){
        console.log('os will update');
    }

    render() {
        return (
            <Auxil>
                <p>Burger Contains :</p>
                <ul>
                    {this.ingredients}
                </ul>
                <p>Total Price: {this.props.totalPrice.toFixed(2)}$</p>
                <p>Continue to chechout?</p>
                <Button clicked={this.props.removeModal} btnType="Danger">Cancel</Button>
                <Button clicked={this.props.purchace} btnType="Success">Continue</Button>
            </Auxil>
        )
    }
}

export default OrderSummary;