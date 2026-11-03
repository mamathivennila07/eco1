import './index.css'
import {Link} from 'react-router-dom'

const Productcart = props => {
  const {de} = props
  const {title, imageUrl, brand, price, rating, id} = de
  return (
    <div>
      <Link to={`/products/${id}`} className="u">
        <li className="jus">
          <img src={imageUrl} alt={title} className="lk" />
          <p className="m">{title}</p>
          <p className="n">{brand}</p>
          <div className="jd">
            <p>₹{price}/-</p>
            <p>⭐{rating}</p>
          </div>
        </li>
      </Link>
    </div>
  )
}
export default Productcart
