import React, { useReducer } from 'react';
import Auxil from '../../Hoc/Auxil/Auxil';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

import { object } from 'prop-types';


const PRICES = {
    meat: 1.2,
    cheese: 0.8,
    bacon: 0.9,
    salad: 0.3
}

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 0,
        orderable: false,
        showSummaryModal: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });

        this.updateOrderableStatus(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] >= 1) {
            const updatedCount = this.state.ingredients[type] - 1;
            const updatedIngredients = { ...this.state.ingredients }
            updatedIngredients[type] = updatedCount;

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: this.state.totalPrice - PRICES[type]
            });

            this.updateOrderableStatus(updatedIngredients)
        }
        else {
            alert('cant remove something that dosnt exist')
        }
    }

    updateOrderableStatus = (ingredients) => {
        const ingCount = Object.keys(ingredients)
            .map(oKey => {
                return ingredients[oKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)

        this.setState({ orderable: ingCount > 0 })
    }

    handleSummaryModalState = () => {
        this.setState({ showSummaryModal: true });
    }

    handleBackDropRemoval = () => {
        this.setState({ showSummaryModal: false });
    }

    handlePurchace = () => {
        alert('Thank you! Your order is on its way!!!')
        this.handleBackDropRemoval();
        this.restartBurger();
    }

    restartBurger = () => {
        let reseted = {
            ...this.state.ingredients
        };

        let keys = Object.keys(reseted);

        keys.forEach(element => {
            reseted[element] = 0
        });

        this.setState({
            ingredients: reseted,
            totalPrice: 0
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Auxil>
                <Modal show={this.state.showSummaryModal} removeBackdrop={this.handleBackDropRemoval}>
                    <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} removeModal={this.handleBackDropRemoval} purchace={this.handlePurchace} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    addIng={this.addIngredientHandler}
                    remIng={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    orderable={this.state.orderable}
                    handleSummaryModal={this.handleSummaryModalState} />
            </Auxil>
        )
    }
}

export default BurgerBuilder;