import React, { lazy, Component } from 'react';
import Auxil from '../../Hoc/Auxil/Auxil';
import Classes from '../Layout/Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
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