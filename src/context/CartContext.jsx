import { createContext, useReducer } from 'react'

export const CartContext = createContext()

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { cart: action.payload }
    default:
      return state
  }
}

export const CartContextProvider = ({ children }) => {
  const lcl = JSON.parse(localStorage.getItem('cart'))
  const [state, dispatch] = useReducer(CartReducer, { cart: lcl ? lcl : [] })

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
