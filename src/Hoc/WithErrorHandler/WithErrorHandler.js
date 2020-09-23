import React, { Component } from 'react';
import Auxil from '../Auxil/Auxil';
import Modal from '../../Components/UI/Modal/Modal';

const WithErrorHandler = (WrapperComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        errorConfirmed = () => {            
            this.setState({ error: null })
        }

        render() {
            return (
                <Auxil>
                    <Modal show={this.state.error} removeBackdrop={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Auxil>
            )
        }
    }
}

export default WithErrorHandler;