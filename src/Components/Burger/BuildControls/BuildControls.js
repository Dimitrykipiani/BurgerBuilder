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
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIngredient={() => props.addIng(ctrl.type)}
                removeIngredient={() => props.remIng(ctrl.type)}
                disabled={props.disabledInfo[ctrl.type]} />
        })}
        <div><strong>Total Price: {Math.abs(props.price.toFixed(2))}$</strong></div>
        <button
            disabled={!props.orderable}
            className={Classes.OrderButton}
            onClick={props.handleSummaryModal}>Order Now!!!</button>
    </div>
)

export default BuildControls;