import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import cartContext from '../../context/cartContext'

const Header = props => {
  const jf = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const renderlen = () => {
    return (
      <cartContext.Consumer>
        {value => {
          const {cartList} = value
          const tre = cartList.length
          return <>{tre > 0 ? <span className="bvc">{tre}</span> : null}</>
        }}
      </cartContext.Consumer>
    )
  }
  return (
    <>
      <div className="we">
        <nav className="b1">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ds0tv4nq8/image/upload/v1783127826/ChatGPT_Image_Jul_4_2026_06_47_38_AM_v7seoc.png"
              className="a1"
            />
          </Link>
          <div>
            <Link to="/" className="sw">
              Home
            </Link>
            <Link to="/products" className="sw">
              products
            </Link>
            <Link to="/cart" className="sw">
              Cart {renderlen()}
            </Link>

            <button onClick={jf}>Logout</button>
          </div>
        </nav>
      </div>

      <div className="kd">
        <nav className="iu">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ds0tv4nq8/image/upload/v1783127826/ChatGPT_Image_Jul_4_2026_06_47_38_AM_v7seoc.png"
              className="asd"
            />
          </Link>

          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="ass"
            onClick={jf}
          />
        </nav>
        <nav className="gh">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              className="pi"
            />
          </Link>
          <Link to="/products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              className="pi"
            />
          </Link>
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              className="pi"
            />{' '}
            {renderlen()}
          </Link>
        </nav>
      </div>
    </>
  )
}
export default withRouter(Header)
