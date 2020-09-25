import { checkPropTypes } from 'prop-types';
import React from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';

import Classes from '../CheckoutSummary/CheckoutSummary.module.css'

const CheckoutSummary = (props) => (
    <div className={Classes.CheckoutSummary}>
        <h1>Hope it tastes well!!!</h1>
        <div className={Classes.Burger}>
            <Burger ingredients={props.ingredients} />
        </div>
        <div>
            <Button  btnType="Danger" clicked={props.checkoutCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    </div>
)

export default CheckoutSummary;