// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div>
            <h1>
              <span>Order Total:</span> Rs {total}
            </h1>
            <p>{cartList.length} Items in cart</p>
          </div>
          <button>Checkout</button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
