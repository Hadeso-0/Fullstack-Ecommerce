import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { useStateContext } from '../lib/context'
import { NavStyles, NavItems } from '../styles/navStyles'
import Cart from './cart'

export default function Nav() {
  const { cartOpen, setCartOpen, totalQty } = useStateContext()
  return (
    <NavStyles>
      <Link href={'/'}>Styled.</Link>
      <NavItems>
        <div onClick={() => setCartOpen(true)}>
          {totalQty > 0 && <span>{totalQty}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {cartOpen ? <Cart /> : ''}
    </NavStyles>
  )
}
