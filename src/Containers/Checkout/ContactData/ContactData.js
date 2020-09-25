import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../Components/UI/Button/Button';

import Classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    handleOrder = (event) => {
        event.preventDefault();

        console.log(this.props.ingredients);
        axios.post('/burger/create', {
            TotalPrice: this.props.ingredients.price,
            meatCount: this.props.ingredients.meat,
            baconCount: this.props.ingredients.bacon,
            cheeseCount: this.props.ingredients.cheese,
            saladCount: this.props.ingredients.salad
        }).then(response => {
            this.props.history.push('/');
        }).catch(error => {

        })
    }

    render() {
        return (
            <div className={Classes.ContactData}>
                <h4>Enter your contact data please!!!</h4>
                <form>
                    <input className={Classes.Input} type="text" name="name" placeholder="Your Name"></input>
                    <input className={Classes.Input} type="email" name="email" placeholder="Your Email"></input>
                    <input className={Classes.Input} type="text" name="street" placeholder="Street Name"></input>
                    <input className={Classes.Input} type="text" name="postal" placeholder="Postal Code"></input>
                    <Button clicked={this.handleOrder} btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;