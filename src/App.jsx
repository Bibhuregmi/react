import React from 'react'

const products = [
  {name: 'Cabbage', isFruit: false, id:1},
  {name: 'Garlic', isFruit: false, id:2},
  {name: 'Apple', isFruit: true, id:3}
]

function ShoppingList() {
  const listItems = products.map(product => 
    <li key = {product.id} 
        style = {
          {color: product.isFruit ? 'red' : 'green'}
        }
        >
          {product.name}
    </li>
  );

  return(
    <ul>{listItems}</ul>
  )
}
export default ShoppingList