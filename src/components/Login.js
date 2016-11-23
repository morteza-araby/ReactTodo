import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'Actions'

export class Login extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.onLogin = this.onLogin.bind(this)
  }

  onLogin() {
    var {dispatch} = this.props
    dispatch(actions.startLogin())
  }

  render() {
    return (
      <div className='row'>
        <div className='columns'>
          <div className='callout callout-auth'>
            <h3>Login</h3>
            <p>
              Login with GitHub account below
                    </p>
            <button className='button' onClick={this.onLogin}>Login with GitHub</button>
          </div>
        </div>
      </div>

    )
  }
}

export default connect()(Login)