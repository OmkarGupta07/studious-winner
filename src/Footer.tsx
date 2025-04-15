import React from 'react'

export const Footer = () => {

const hour = new Date().getHours();

console.log(hour);

  return (
 
    <footer className='footer'>MODERN PIIZERIA {hour<=12 && hour>=24?` We're Open`:`We're Close`}</footer>
  )
}
