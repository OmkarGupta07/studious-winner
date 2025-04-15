import React from 'react'

interface Pizzaprops{
    url:string,
    Pizza:string,
    ingredients:string,
}

export const Pizza = ({url,Pizza,ingredients}:Pizzaprops) => {
  return (
    <div>
        <img src={url}/>
        <h2>{Pizza}</h2>
        <p>{ingredients}</p>
    </div>
  )
}
