import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProductItem from './components/ProductItem'
import NotFound from './components/NotFound'
import Protected from './components/Protected'
import './App.css'
import cartContext from './context/cartContext'

class App extends Component {
  state = {
    cartList: [],
  }
  addcart = product => {
    this.setState(prev => {
      const isex = prev.cartList.find(item => item.id === product.id)
      if (isex) {
        return {
          cartList: prev.cartList.map(each => {
            if (each.id === product.id) {
              return {...each, quantity: each.quantity + 1}
            }
            return each
          }),
        }
      }

      return {
        cartList: [...prev.cartList, {...product, quantity: 1}],
      }
    })
  }

  increases = id => {
    this.setState(prev => ({
      cartList: prev.cartList.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity + 1}
        }
        return item
      }),
    }))
  }
  decreases = id => {
    this.setState(prev => ({
      cartList: prev.cartList
        .map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          }
          return item
        })
        .filter(item => item.quantity > 0),
    }))
  }
  deletecart = id => {
    this.setState(prev => ({
      cartList: prev.cartList.filter(item => item.id !== id),
    }))
  }
  removeAll = () => {
    this.setState({cartList: []})
  }
  render() {
    const {cartList} = this.state
    return (
      <cartContext.Provider
        value={{
          cartList,
          addcart: this.addcart,
          deletecart: this.deletecart,
          removeAll: this.removeAll,
          increases: this.increases,
          decreases: this.decreases,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Protected exact path="/" component={Home} />
          <Protected exact path="/products" component={Products} />
          <Protected exact path="/products/:id" component={ProductItem} />

          <Protected exact path="/cart" component={Cart} />

          <Route component={NotFound} />
        </Switch>
      </cartContext.Provider>
    )
  }
}

export default App
