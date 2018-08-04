import React from 'react'
import { Redirect } from 'react-router-dom'

import * as actions from './actions'
import connected from '../../../state/connect'
import { selector as users } from '../reducer'
import JWTVerify from './verify-jwt-token'

const autoLoginProcess = WrappedComponent => {
  class AutoLogin extends React.Component {
    render() {
      const { active } = this.props.users
      if (active)
        return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />

      return <WrappedComponent {...this.props} />
    }
  }

  return connected([users], [actions])(JWTVerify(AutoLogin))
}

export default autoLoginProcess
