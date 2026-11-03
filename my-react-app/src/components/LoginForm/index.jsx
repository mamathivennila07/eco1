import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    err: '',
  }

  se = event => {
    this.setState({username: event.target.value})
  }
  sr = event => {
    this.setState({password: event.target.value})
  }
  ki = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  kj = errorMsg => {
    this.setState({err: errorMsg})
  }
  op = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const st = {username, password}
    const api = 'https://apis.ccbp.in/login'
    const kl = {
      method: 'POST',
      body: JSON.stringify(st),
    }
    const yu = await fetch(api, kl)
    const rt = await yu.json()

    if (yu.ok) {
      this.ki(rt.jwt_token)
    } else {
      this.kj(rt.error_msg)
    }
  }

  render() {
    const {username, password, err} = this.state
    return (
      <div className="b">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="a"
        />
        <div className="c">
          <form onSubmit={this.op}>
            <div>
              <img
                src="https://res.cloudinary.com/ds0tv4nq8/image/upload/v1783127826/ChatGPT_Image_Jul_4_2026_06_47_38_AM_v7seoc.png"
                className="d"
              />
            </div>
            <br />
            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              type="text"
              value={username}
              onChange={this.se}
              placeholder="USERNAME"
            />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.sr}
              placeholder="PASSWORD"
            />
            <br />
            <button type="submit">Login</button>
          </form>
          {err && <p className="hb">{err}</p>}
        </div>
      </div>
    )
  }
}
export default LoginForm
