import React from 'react'
import { Pizza } from './Pizza'

export const Menu = () => {
    let PizzaData=[
        {
          "name": "Margherita Pizza",
          "ingredients": "Tomato , Mozzarella , Basil" ,
          "price": 8.99,
          "photoName": "https://unsplash.com/photos/7nrsVjvALnA",
          "soldOut": false
        },
        {
          "name": "Pepperoni Pizza",
          "ingredients": "Tomato , Mozzarella, Pepperoni",
          "photoName": "https://unsplash.com/photos/1SAnrIxw5OY",
          "price": 10.99,
          "soldOut": false
        },
        {
          "name": "Vegan Delight",
          "ingredients": "Tomato, Vegan Cheese , Olives ,Peppers",
          "price": 11.49,
          "photoName": "https://unsplash.com/photos/6VhPY27jdps",
          "soldOut": true
        },
        {
          "name": "Hawaiian Pizza",
          "ingredients": "Tomato, Mozzarella , Ham ,Pineapple " ,
          "price": 10.49,
          "photoName": "https://unsplash.com/photos/1SAnrIxw5OY",
          "soldOut": false
        },
        {
          "name": "BBQ Chicken Pizza",
          "ingredients": "BBQ Sauce , Chicken,  Onion , Mozzarella ",
          "price": 12.49,
          "photoName": "https://unsplash.com/photos/6VhPY27jdps",
          "soldOut": true
        }
      ]
      

  return (
    <div className='pizza'>
         { PizzaData.map((ele: any) => (
          <Pizza
            url={ele.photoName}
            Pizza={ele.name} 
            ingredients={ele.ingredients}
          />
        ))
        }
    </div>
  )
}
