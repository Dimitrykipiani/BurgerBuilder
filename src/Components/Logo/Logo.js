import React from 'react';

import Classes from '../Logo/Logo.module.css';

import BurgerLogo from '../../Assets/burger-logo.png';
import { withRouter } from 'react-router-dom';

class Logo extends React.Component {
    handleClick = () =>{
        console.log(this.props);
        this.props.history.replace('/');
    }

    render() {
        return (
            <div className={Classes.Logo} onClick={this.handleClick}>
                <img src={BurgerLogo} />
            </div>
        )
    }
}

export default withRouter(Logo);