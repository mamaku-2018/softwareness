import React from 'react'
import {connect} from 'react-redux'
import {register} from '../../actions/auth/register'
import {clearError} from '../../actions'
import {Redirect} from 'react-router-dom'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      confirm: '',
      match: false,
      message: 'Passwords do not match',
      redirect: false
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
      password: this.state.password
    }
    register(user)
    this.setState({redirect: true})
    e.preventDefault()
  }

  render () {
    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <div className="register">
          <form>
            <fieldset>
              <h3>Register</h3>
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
              {!this.state.match && <span>{this.state.message}</span>}
              <br />

              <button type="button" disabled={!this.state.match} className="button" onClick={this.handleSubmit}>Register</button>
            </fieldset>
          </form>
        </div>
      )
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (user) => {
      dispatch(clearError())
      return dispatch(register(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
