import React from 'react'

//screens
import LoginScreen from './login.screen'
import ResetPasswordScreen from './resetPassword/resetPassword.screen'
import SignUpScreen from './signup/signup.screen'
import ConfirmResetPasswordScreen from './resetPassword/confirmResetPassword.screen'

//ui

import Container from '~/ui/structure/container/container.component'
import Box from '~/ui/structure/box/box.component'

const AuthScreen = () => {
	//login is by default the first screen shown
	const [screen, setScreen] = React.useState('LoginScreen')

	//login.screen, signup.screen or resetPassword.screen
	return (
		<Container>
			<Box
				initialSize={{ width: '100%', minHeight: '100vh' }}
				render={{
					display: 'flex',
					direction: 'column',
					justify: 'center',
					align: 'center',
				}}
			>
				<Box
					initialSize={{ width: '100%', minHeight: '50vh' }}
					tabletSize={{ width: '500px', minHeight: '50vh' }}
					padding='3rem 0 '
					backgroundColor='black'
					borderRadius='16px'
				>
					{screen === 'LoginScreen' && <LoginScreen routing={setScreen} />}
					{screen === 'SignupScreen' && <SignUpScreen routing={setScreen} />}
					{screen === 'ResetPasswordScreen' && (
						<ResetPasswordScreen routing={setScreen} />
					)}
					{screen === 'ConfirmResetPasswordScreen' && (
						<ConfirmResetPasswordScreen routing={setScreen} />
					)}
				</Box>
			</Box>
		</Container>
	)
}

export default AuthScreen
