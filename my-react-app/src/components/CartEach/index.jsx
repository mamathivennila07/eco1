import './index.css'
import cartContext from '../../context/cartContext'

const CartEach = props => {
  const {each} = props

  return (
    <cartContext.Consumer>
      {value => {
        const {deletecart, increases, decreases} = value

        return (
          <li className="pty">
            <div>
              <img src={each.imageUrl} alt={each.title} className="kw" />
            </div>

            <div className="ybv">
              <h1 className="jhg">{each.title}</h1>
              <p>by {each.brand}</p>
            </div>
            <button className="fdx" onClick={() => decreases(each.id)}>
              -
            </button>
            <div className="ygb">
              <p>Qty: {each.quantity}</p>
            </div>
            <button className="fdx" onClick={() => increases(each.id)}>
              +
            </button>
            <div className="padds">
              <p>Rs {each.price}</p>
            </div>

            <button onClick={() => deletecart(each.id)} className="vennila">
              Remove
            </button>
          </li>
        )
      }}
    </cartContext.Consumer>
  )
}

export default CartEach
