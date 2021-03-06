import React from 'react';
import Classes from '../BackDrop/Backdrop.module.css'

const Backdrop = (props) =>(
    props.show? <div className={Classes.Backdrop} onClick={props.clicked}></div> : null
)

export default Backdrop;