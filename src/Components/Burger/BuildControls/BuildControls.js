import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import Classes from '../BuildControls/BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
    <div className={Classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} label={ctrl.label} />
        })}
        <div><strong>Total Price:{props.price}</strong></div>
    </div>
)

export default BuildControls;