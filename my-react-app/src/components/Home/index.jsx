import './index.css'
import Header from '../Header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="b">
        <div className="ui">
          <h1 className="gt">Clothes you explore..!!!</h1>
          <p className="bf">
            Our eCommerce platform offers a seamless and convenient shopping
            experience, allowing users to browse, search, and purchase products
            from a wide range of categories. From fashion and electronics to
            home essentials, we bring everything you need to your fingertips.
            Fast delivery, easy returns, and dedicated customer support make
            shopping.
          </p>
          <button>view now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="a"
        />
      </div>
    </div>
  )
}
export default Home
