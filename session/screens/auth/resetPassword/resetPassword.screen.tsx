import React from 'react'
import PropTypes from 'prop-types'

import api from '~/session/api/client'

import Header1 from '~/ui/headers/h1/h1.component'
import Input from '~/ui/inputs/input/input.component'
import Button from '~/ui/buttons/button/button.component'
import Flex from '~/ui/structure/flex/flex.component'
import Form from '~/ui/forms/form.component'

const ResetPasswordScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	const [username, setUsername] = React.useState('')
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			await api.forgotPassword(username)
			routing('ConfirmResetPasswordScreen')
		} catch (err) {
			console.error(err)
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist()
		setUsername(event.target.value)
	}
	return (
		<Flex
			direction='column'
			justify='center'
			align='center'
			width='25vw'
			minHeight='50vh'
		>
			<Header1 align='center'>Reseteá tu contraseña</Header1>

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

				<Button type='submit' margin='3rem auto 1rem'>
					Resetear Contraseña
				</Button>
			</Form>
		</Flex>
	)
}

ResetPasswordScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default ResetPasswordScreen
