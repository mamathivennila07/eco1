import CartEach from '../CartEach'

import cartContext from '../../context/cartContext'

const CartItem = () => {
  return (
    <cartContext.Consumer>
      {value => {
        const {cartList} = value
        return (
          <div>
            <ul>
              {cartList.map(each => (
                <CartEach each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )
      }}
    </cartContext.Consumer>
  )
}
export default CartItem
