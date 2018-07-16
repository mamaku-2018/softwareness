import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/auth/login'
import {clearError} from '../../actions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      userLoggedIn: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const {login} = this.props
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    const goHome = () => this.props.history.push('/')
    login(user, goHome)
    e.preventDefault()
  }

  render () {
    return (
      <div className="login">
        <form>
          <fieldset>
            <legend>Login</legend>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
            <br />

            <button type="button" className="button" onClick={this.handleSubmit}>Login</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (user, goHome) => {
      dispatch(clearError())
      return dispatch(login(user, goHome))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
