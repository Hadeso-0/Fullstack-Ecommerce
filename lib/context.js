import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  // States
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(0)
  //   Manage State
  const increaseQty = () => setQty((cur) => cur + 1)
  const decreaseQty = () => setQty((cur) => (cur >= 1 ? cur - 1 : 0))
  return (
    <ShopContext.Provider value={{ qty, increaseQty, decreaseQty }}>
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)
