import { checkPropTypes } from 'prop-types';
import React, { Component } from 'react';
import Classes from '../Modal/Modal.module.css';
import Auxil from '../../../Hoc/Auxil';
import Backdrop from '../BackDrop/BackDrop'


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show;
    }

    componentDidUpdate() {
        console.log('modal will update');
    }

    render() {
        return (
            <Auxil>
                <Backdrop show={this.props.show} removeBackdrop={this.props.removeBackdrop} />
                <div
                    className={Classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxil>
        )
    }
}

export default Modal;