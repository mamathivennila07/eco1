import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import Header from '../Header'
import Similar from '../Similar'
import './index.css'
import cartContext from '../../context/cartContext'

class ProductItem extends Component {
  state = {
    productData: null,
    similarProducts: [],
    status: 'LOADING',
    quantity: 1,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const id = match.params.id

    const jwtToken = Cookies.get('jwt_token')

    const res = await fetch(`https://apis.ccbp.in/products/${id}`, {
      headers: {Authorization: `Bearer ${jwtToken}`},
    })

    if (res.ok) {
      const data = await res.json()

      const product = {
        id: data.id,
        title: data.title,
        price: data.price,
        imageUrl: data.image_url,
        description: data.description,
        brand: data.brand,
        rating: data.rating,
        availability: data.availability,
        totalReviews: data.total_reviews,
      }

      const similar = data.similar_products.map(item => ({
        id: item.id,
        title: item.title,
        imageUrl: item.image_url,
        price: item.price,
        rating: item.rating,
        brand: item.brand,
      }))

      this.setState({
        productData: product,
        similarProducts: similar,
        status: 'SUCCESS',
      })
    } else {
      this.setState({status: 'FAIL'})
    }
  }

  decrement = () => {
    this.setState(prev => ({
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }))
  }

  increment = () => {
    this.setState(prev => ({
      quantity: prev.quantity + 1,
    }))
  }

  render() {
    const {productData, similarProducts, status, quantity} = this.state

    if (status === 'LOADING') {
      return (
        <div>
          <Header />
          <ThreeDots color="#0b69ff" height={50} width={50} className="lod" />
        </div>
      )
    }

    if (status === 'FAIL') {
      return (
        <div>
          <Header />
          <h1>Product Not Found</h1>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )
    }

    return (
      <cartContext.Consumer>
        {value => {
          const {addcart} = value

          const onAddCart = () => {
            const item = {...productData, quantity}
            addcart(item)
          }

          return (
            <div>
              <Header />

              <div className="uy">
                <img src={productData.imageUrl} alt="product" className="q" />

                <div>
                  <h1>{productData.title}</h1>
                  <p>Rs {productData.price}</p>
                  <p>{productData.rating} ⭐</p>
                  <p>{productData.totalReviews} Reviews</p>
                  <p>{productData.description}</p>
                  <p>Brand: {productData.brand}</p>
                  <p>Available: {productData.availability}</p>

                  <div>
                    <button className="sts" onClick={this.decrement}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button className="sts" onClick={this.increment}>
                      +
                    </button>
                  </div>

                  <button onClick={onAddCart}>ADD TO CART</button>
                </div>
              </div>

              <h2>Similar Products</h2>
              <ul className="gz">
                {similarProducts.map(item => (
                  <Similar key={item.id} productDetails={item} />
                ))}
              </ul>
            </div>
          )
        }}
      </cartContext.Consumer>
    )
  }
}

export default ProductItem
