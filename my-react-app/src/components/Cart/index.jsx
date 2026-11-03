import Header from '../Header'
import CartItem from '../CartItem'
import Empty from '../Empty'
import './index.css'
import cartContext from '../../context/cartContext'

const Cart = () => {
  return (
    <cartContext.Consumer>
      {value => {
        const {cartList, removeAll} = value
        const stq = cartList.length === 0
        const yt = () => {
          removeAll()
        }
        const tot = cartList.reduce((q, p) => {
          return q + p.price * p.quantity
        }, 0)
        const counts = cartList.reduce((q, p) => {
          return q + p.quantity
        }, 0)
        return (
          <div>
            <Header />
            <h1>My Cart</h1>
            <div className="fs">
              <button onClick={yt} className="vennila">
                remove all
              </button>
            </div>
            {stq ? <Empty /> : <CartItem />}
            {stq ? null : (
              <div className="tfcft">
                <h1 className="nbv">order Total :₹ {tot} /-</h1>
                <p className="oiu">{counts}items in cart</p>
              </div>
            )}
          </div>
        )
      }}
    </cartContext.Consumer>
  )
}
export default Cart
