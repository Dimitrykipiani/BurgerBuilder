import React from 'react';
import Classes from '../BuildControl/BuildControl.module.css';

const BuildControl = (props) => (
    <div className={Classes.BuildControl}>
        <div className={Classes.Label}>{props.label}</div>
        <button disabled={props.disabled} onClick={props.removeIngredient} className={Classes.Less}>Less</button>
        <button onClick={props.addIngredient} className={Classes.More}>More</button>
    </div>
)

export default BuildControl;