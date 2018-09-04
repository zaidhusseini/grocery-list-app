import React from 'react';

const GroceryItem = ({item}) => (
  <div>
    <span style={{"marginRight":"5px"}}>{item.description}</span>
    <span>{item.quantity}</span>
  </div>
)

export default GroceryItem;