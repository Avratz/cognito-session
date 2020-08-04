import React from 'react'
import PropTypes from 'prop-types'

import api from '~/session/api/client'

import Header1 from '~/ui/headers/h1/h1.component'
import Input from '~/ui/inputs/input/input.component'
import Button from '~/ui/buttons/button/button.component'
import Flex from '~/ui/structure/flex/flex.component'
import Form from '~/ui/forms/form.component'

const ConfirmResetPasswordScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	const [user, setUser] = React.useState({
		username: '',
		code: '',
		password: '',
	})
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const { username, code, password } = user
			await api.forgotPasswordSubmit(username, code, password)
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
		<Flex
			direction='column'
			justify='center'
			align='center'
			width='25vw'
			minHeight='50vh'
		>
			<Header1 align='center'>Confirma el reseteo de tu contraseña</Header1>

			<Form
				display='flex'
				direction='column'
				align='center'
				handleSubmit={handleSubmit}
			>
				<Input
					name='username'
					type='text'
					id='username'
					placeholder='Ingresa tu nombre de usuario'
					handleChange={handleChange}
				/>
				<Input
					name='code'
					type='text'
					id='code'
					placeholder='Ingresa el codigo que recibiste en tu Email'
					handleChange={handleChange}
				/>
				<Input
					name='password'
					type='password'
					id='password'
					placeholder='Ingresa una nueva contraseña'
					handleChange={handleChange}
				/>

				<Button type='submit' margin='3rem auto 1rem'>
					Confirmar
				</Button>
			</Form>
		</Flex>
	)
}

ConfirmResetPasswordScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default ConfirmResetPasswordScreen
