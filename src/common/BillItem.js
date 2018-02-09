import React from 'react'

export default (props) => (
  <div className='bill_item'>
    {props.item} <span className='bill_price'>R$ {props.price.toFixed(2)}</span>
  </div>
)