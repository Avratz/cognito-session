import React from 'react'
import PropTypes from 'prop-types'

//screens
import LoginScreen from './login.screen'
import ResetPasswordScreen from './resetPassword/resetPassword.screen'
import SignUpScreen from './signup/signup.screen'

const AuthScreen = (props) => {
	//login is by default the first screen shown
	const [screen, setScreen] = React.useState('LoginScreen')

	//login.screen, signup.screen or resetPassword.screen
	return (
		<React.Fragment>
			{screen === 'LoginScreen' && <LoginScreen routing={setScreen} />}
			{screen === 'SignupScreen' && <SignUpScreen routing={setScreen} />}
			{screen === 'ResetPasswordScreen' && (
				<ResetPasswordScreen routing={setScreen} />
			)}
		</React.Fragment>
	)
}

AuthScreen.propTypes = {}

export default AuthScreen
