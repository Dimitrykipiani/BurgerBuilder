import React, { lazy, useReducer } from 'react';
import Auxil from '../../Hoc/Auxil/Auxil';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import WithErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler';

import { object, string } from 'prop-types';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';


const PRICES = {
    meat: 0,
    cheese: 0,
    bacon: 0,
    salad: 0
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
        showSummaryModal: false,
        loading: false
    }

    componentDidMount() {        
        axios.get('burger/getprices')
            .then(response => {
                const data = response.data;

                PRICES.meat = data.meatPrice;
                PRICES.cheese = data.cheesePrice;
                PRICES.bacon = data.baconPrice;
                PRICES.salad = data.saladPrice;
            });
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
        console.log(updatedPrice);
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
        let params = [];
        for(let i in this.state.ingredients)
        {
            params.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredients[i]));
        }

        params.push('price='+ this.state.totalPrice)

        const queryString = params.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?'+ queryString
        });
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

        alert('Thanks! Your burger is on its way!!!')
        this.handleBackDropRemoval();
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSum = <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            removeModal={this.handleBackDropRemoval}
            purchace={this.handlePurchace} />;

        if (this.state.loading) {
            orderSum = <Spinner />
        }

        return (
            <Auxil>
                <Modal show={this.state.showSummaryModal} removeBackdrop={this.handleBackDropRemoval}>
                    {orderSum}
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

export default WithErrorHandler(BurgerBuilder, axios);