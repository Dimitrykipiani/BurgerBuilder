import React from 'react';
import Auxil from '../../Hoc/Auxil';
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            'meat': 1,
            'cheese': 1,
            'bacon': 2,
            'salad': 1
        }
    }

    render() {
        return (
            <Auxil>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxil>
        )
    }
}

export default BurgerBuilder;