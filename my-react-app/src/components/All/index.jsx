import {Component} from 'react'
import Cookies from 'js-cookie'
import Filter from '../Filter'
import Productcart from '../Productcart'
import Productsort from '../Productsort'

import './index.css'

const ratingList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]
const categoryOptions = [
  {name: 'Clothing', categoryId: '1'},
  {name: 'Electronics', categoryId: '2'},
  {name: 'Appliances', categoryId: '3'},
  {name: 'Grocery', categoryId: '4'},
  {name: 'Toys', categoryId: '5'},
]

const sort = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price(High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price(Low-High)',
  },
]

class All extends Component {
  state = {
    pro: [],
    active: sort[0].optionId,
    activerat: '',
    activecat: '',
    s: '',
  }
  componentDidMount() {
    this.gets()
  }
  rat = ratingId => {
    this.setState({activerat: ratingId}, this.gets)
  }
  cat = categoryId => {
    this.setState({activecat: categoryId}, this.gets)
  }
  cha = event => {
    this.setState({s: event.target.value})
  }
  updates = active => {
    this.setState({active}, this.gets)
  }
  gets = async () => {
    const {active, activecat, activerat, s} = this.state

    const api = `https://apis.ccbp.in/products?sort_by=${active}&category=${activecat}&rating=${activerat}&title_search=${s}`
    const jwtToken = Cookies.get('jwt_token')

    const sts = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const res = await fetch(api, sts)
    if (res.ok === true) {
      const iu = await res.json()
      const up = iu.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({pro: up})
    }
  }
  ins = event => {
    if (event.key === 'Enter') {
      this.gets()
    }
  }
  clear = () => {
    this.setState({activecat: '', activerat: '', s: ''}, this.gets)
  }
  render() {
    const {pro, active, activecat, activerat, s} = this.state
    return (
      <div>
        <Productsort sort={sort} active={active} updates={this.updates} />
        <div className="rv">
          <Filter
            ratingList={ratingList}
            categoryOptions={categoryOptions}
            rat={this.rat}
            cat={this.cat}
            s={s}
            cha={this.cha}
            activerat={activerat}
            activecat={activecat}
            clear={this.clear}
            ins={this.ins}
          />
          <ul className="ji">
            {pro.map(each => (
              <Productcart de={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default All
