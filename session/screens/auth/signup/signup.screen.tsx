import React from 'react'
import PropTypes from 'prop-types'

import api from '~/session/api/client'

import Header1 from '~/ui/headers/h1/h1.component'
import Input from '~/ui/inputs/input/input.component'
import Button from '~/ui/buttons/button/button.component'

import Form from '~/ui/forms/form.component'
import ALink from '~/ui/links/link/link.component'

const SingupScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	const [user, setUser] = React.useState({
		fullName: '',
		userName: '',
		email: '',
		password: '',
	})

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const { fullName, userName, email, password } = user
			const attributes = { email, name: fullName }
			await api.signUp(userName, password, attributes)
			routing('LoginScreen')
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

	return (
		<React.Fragment>
			<Header1 align='center'>Crea tu cuenta</Header1>

			<Form
				display='flex'
				direction='column'
				align='center'
				handleSubmit={handleSubmit}
			>
				<Input
					name='fullName'
					id='fullName'
					placeholder='Tu Nombre completo'
					handleChange={handleChange}
				/>
				<Input
					name='userName'
					id='user'
					placeholder='Tu Usuario'
					handleChange={handleChange}
				/>
				<Input
					name='email'
					type='email'
					id='email'
					placeholder='Tu Email'
					handleChange={handleChange}
				/>
				<Input
					name='password'
					type='password'
					id='password'
					placeholder='Tu contraseña'
					handleChange={handleChange}
				/>

				<Button type='submit' margin='3rem auto 1rem'>
					Registrate
				</Button>
			</Form>
			<ALink routing={() => routing('LoginScreen')}>
				¿Ya tenes cuenta? Inicia sesión!
			</ALink>
		</React.Fragment>
	)
}

SingupScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default SingupScreen
