import React from 'react'
import PropTypes from 'prop-types'

import api from '~/session/api/client'

import Header1 from '~/ui/headers/h1/h1.component'
import Input from '~/ui/inputs/input/input.component'
import Button from '~/ui/buttons/button/button.component'
import Flex from '~/ui/structure/flex/flex.component'
import Form from '~/ui/forms/form.component'
import ALink from '~/ui/links/link/link.component'

const LoginScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	const [user, setUser] = React.useState({ username: '', password: '' })

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const { username, password } = user
			await api.signIn(username, password)
		} catch (err) {
			console.error(err)
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist()
		setUser((prevUser) => {
			return { ...prevUser, [event.target.name]: event.target.value }
		})
	}

	const signInWithGoogle = async () => {
		try {
			const algo = await api.federatedSignIn({
				provider: 'Google',
			})
			console.log(algo)
		} catch (err) {
			console.error(err)
		}
	}
	/*
		**todo
		- Signin with Federated identities ✔️
		- Handle Errors
		- Build User Profile
	*/
	return (
		<Flex
			direction='column'
			justify='center'
			align='center'
			width='25vw'
			minHeight='50vh'
			padding='3rem 0 '
		>
			<Header1 align='center' margin='0 0 3rem'>
				Iniciar Sesion
			</Header1>
			<Button handleClick={signInWithGoogle}>Ingresa con google</Button>
			<div style={{ width: '100%', textAlign: 'center', padding: '2rem' }}>
				<hr style={{ top: '20px', position: 'relative' }} />
				<span
					style={{
						backgroundColor: 'black',
						position: 'relative',
						padding: '1rem',
					}}
				>
					O
				</span>
			</div>
			<Form
				display='flex'
				direction='column'
				align='center'
				handleSubmit={handleSubmit}
			>
				<Input
					name='username'
					id='user'
					placeholder='Tu Usuario'
					handleChange={handleChange}
				/>
				<Input
					name='password'
					type='password'
					id='password'
					placeholder='Tu contraseña'
					handleChange={handleChange}
				/>

				<ALink routing={() => routing('ResetPasswordScreen')}>
					¿Olvidaste tu contraseña?
				</ALink>

				<Button type='submit' margin='3rem auto 1rem'>
					Inicia Sesion
				</Button>
			</Form>
			<ALink routing={() => routing('SignupScreen')}>
				¿No tenés cuenta? ¡Creala ahora!
			</ALink>
		</Flex>
	)
}

LoginScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default LoginScreen
