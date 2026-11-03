import React from 'react'

const cartContext = React.createContext({
  cartList: [],
  addcart: () => {},
  deletecart: () => {},
  removeAll: () => {},
  increases: () => {},
  decreases: () => {},
})

export default cartContext
