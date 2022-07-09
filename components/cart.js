import { useStateContext } from '../lib/context'
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
} from '../styles/cartStyles'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { Quantity } from '../styles/ProductDetails'
export default function Cart() {
  const { cart, setCartOpen, onAdd, onRemove, totalPrice } = useStateContext()
  return (
    <CartWrapper onClick={() => setCartOpen(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cart.length < 1 && (
          <EmptyStyle>
            <h1>You have more Shopping to do 😜</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cart.length > 0 &&
          cart.map((item) => (
            <Card key={item.slug}>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />
              <CardInfo>
                <h1>{item.title}</h1>
                <h3>{item.price}</h3>
                <Quantity>
                  <span>Quantity</span>
                  <button onClick={() => onRemove(item)}>
                    <AiFillMinusCircle />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => onAdd(item, 1)}>
                    <AiFillPlusCircle />
                  </button>
                </Quantity>
              </CardInfo>
            </Card>
          ))}
        {cart.length > 0 && (
          <Checkout>
            <h3>{`Subtotal: $${totalPrice}`}</h3>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  )
}
