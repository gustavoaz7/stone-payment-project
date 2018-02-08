import React from 'react'

export default (props) => (
  <p>{props.item} <span>R$ {props.price.toFixed(2)}</span></p>
)