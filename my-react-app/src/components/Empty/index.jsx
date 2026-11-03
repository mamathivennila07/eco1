import {Link} from 'react-router-dom'
import './index.css'

const Empty = () => {
  return (
    <div className="ubv">
      <p>Your Cart is Empty</p>
      <Link to="/products">
        <button>view more</button>
      </Link>
    </div>
  )
}
export default Empty
