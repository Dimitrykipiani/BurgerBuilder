import { checkPropTypes } from 'prop-types';
import React from 'react';
import Classes from '../Modal/Modal.module.css';
import Auxil from '../../../Hoc/Auxil';
import Backdrop from '../BackDrop/BackDrop'


const Modal = (props) => {    
    return (        
        <Auxil>
            <Backdrop show={props.show} removeBackdrop={props.removeBackdrop} />
            <div
            className={Classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
        </Auxil>
    )
}

export default Modal;