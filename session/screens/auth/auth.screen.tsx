import React from 'react'

//screens
import LoginScreen from './login.screen'
import ResetPasswordScreen from './resetPassword/resetPassword.screen'
import SignUpScreen from './signup/signup.screen'
import ConfirmResetPasswordScreen from './resetPassword/confirmResetPassword.screen'

//ui
import Flex from '~/ui/structure/flex/flex.component'
import Container from '~/ui/structure/container/container.component'
import Box from '~/ui/structure/box/box.component'

const AuthScreen = () => {
	//login is by default the first screen shown
	const [screen, setScreen] = React.useState('LoginScreen')

	//login.screen, signup.screen or resetPassword.screen
	return (
		<Container>
			<Flex height='100vh' justify='center' align='center'>
				<Box backgroundColor='black' borderRadius='16px'>
					{screen === 'LoginScreen' && <LoginScreen routing={setScreen} />}
					{screen === 'SignupScreen' && <SignUpScreen routing={setScreen} />}
					{screen === 'ResetPasswordScreen' && (
						<ResetPasswordScreen routing={setScreen} />
					)}
					{screen === 'ConfirmResetPasswordScreen' && (
						<ConfirmResetPasswordScreen routing={setScreen} />
					)}
				</Box>
			</Flex>
		</Container>
	)
}

export default AuthScreen
