// Write your code here
import './index.css'

const Similar = props => {
  const {productDetails} = props
  const {title, imageUrl, price, rating, brand} = productDetails

  return (
    <li className="similar-product-item">
      <img src={imageUrl} alt="similar product" className="hc" />

      <h3>{title}</h3>
      <p>Rs {price}</p>

      <div>
        <span>{rating}</span>
        <img
          src="https://assets.ccbp.in/frontend/react-js/star-img.png"
          alt="star"
        />
      </div>

      <p>Brand: {brand}</p>
    </li>
  )
}

export default Similar
