import {Component} from 'react'
import Cookies from 'js-cookie'
import Productcart from '../Productcart'
import {ThreeDots} from 'react-loader-spinner'

import './index.css'

const re = {
  inital: 'INITAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Prime extends Component {
  state = {
    pro: [],
    resp: re.inital,
  }

  componentDidMount() {
    this.gets()
  }
  rendersuc = () => {
    const {pro} = this.state
    return (
      <ul className="ji">
        {pro.map(each => (
          <Productcart de={each} key={each.id} />
        ))}
      </ul>
    )
  }
  renderfail = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
          alt="prime_deals-failure"
          className="yg"
        />
      </div>
    )
  }
  renderload = () => (
    <ThreeDots color="#0b69ff" height={50} width={50} className="lod" />
  )
  gets = async () => {
    this.setState({resp: re.loading})

    const api = 'https://apis.ccbp.in/prime-deals'
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
      const up = iu.prime_deals.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({pro: up, resp: re.success})
    } else {
      this.setState({resp: re.failure})
    }
  }

  renders = () => {
    const {resp} = this.state
    switch (resp) {
      case re.success:
        return this.rendersuc()
      case re.failure:
        return this.renderfail()
      case re.loading:
        return this.renderload()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <h1>All prime deals</h1>
        {this.renders()}
      </div>
    )
  }
}

export default Prime
