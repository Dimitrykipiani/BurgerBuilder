import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import Classes from '../Burger/Burger.module.css'

const Burger = (props) => {

  let dynamicIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr,el)=>{
      return arr.concat(el);
    },[]);

    if(dynamicIngredients.length == 0){
      dynamicIngredients = <p>Please insert some ingredients</p>
    }

  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {dynamicIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;