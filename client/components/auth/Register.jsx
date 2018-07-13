import React from 'react'
import {connect} from 'react-redux'
import {register} from '../../actions/auth/register'
import {showError, clearError} from '../../actions'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      confirm: '',
      match: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      match: match
    })
  }

  handleSubmit (e) {
    const {register} = this.props
    const user = {
      firstName: this.state.firstName,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
      confirm: this.state.confirm
    }
    register(user)
    e.preventDefault()
  }

  render () {
    return (
      <div className="register">
        <form>
          <fieldset>
            <legend>Register</legend>
            <label htmlFor="firstName">First name: </label>
            <input type="text" name="firstName" id="firstName" placeholder="First name" onChange={this.handleChange} value={this.state.firstName}/>
            <br />
            <label htmlFor="name">Last name: </label>
            <input type="text" name="surname" id="surname" placeholder="Surname" onChange={this.handleChange} value={this.state.surname}/>
            <br />
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
            <br />
            <label htmlFor="confirm">Confirm password: </label>
            <input type="password" name="confirm" id="confirm" placeholder="Confirm password" onChange={this.handleChange} value={this.state.confirm}/>
            <br />
            <button className="registerBtn" onClick={this.handleSubmit}>Register</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (user) => {
      if (user.password === user.confirm) {
        dispatch(clearError())
        return dispatch(register(user))
      }
      dispatch(showError('Passwords don\'t match'))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
