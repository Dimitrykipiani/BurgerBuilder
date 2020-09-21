import React, { lazy, Component } from 'react';
import Auxil from '../../Hoc/Auxil';
import Classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    removeBackdropHandler = () => {
        this.setState({showSideDrawer:false})
    }

    displaySideBar = () =>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.SideDrawer}
        });
    }

    render() {
        return (
            <Auxil>
                <SideDrawer show={this.state.showSideDrawer} closed={this.removeBackdropHandler}/>
                <Toolbar toggleSideBar={this.displaySideBar} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Auxil>
        )
    }
}

export default Layout;