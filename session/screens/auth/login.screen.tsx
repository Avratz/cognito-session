import React from 'react'
import PropTypes from 'prop-types'

import api from '~/session/api/client'
import Header1 from '~/ui/headers/h1/h1.component'
import Input from '~/ui/inputs/input/input.component'
import Button from '~/ui/buttons/button/button.component'
import Flex from '~/ui/structure/flex/flex.component'
import Container from '~/ui/structure/container/container.component'
import Box from '~/ui/structure/box/box.component'
import Form from '~/ui/forms/form.component'
import ALink from '~/ui/links/link/link.component'

const LoginScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	return (
		<Container>
			<Flex height='100vh' justify='center' align='center'>
				<Box backgroundColor='black' borderRadius='16px'>
					<Flex
						direction='column'
						justify='center'
						align='center'
						width='25vw'
						minHeight='50vh'
					>
						<Header1 align='center'>Iniciar Sesion</Header1>
						<Form display='flex' direction='column' align='center'>
							<Input
								name='Usuario'
								id='user'
								placeholder='Tu Usuario o Email'
							/>
							<Input
								name='Password'
								type='password'
								id='password'
								placeholder='********'
							/>

							<ALink>¿Olvidaste tu contraseña?</ALink>
							<Button margin='3rem auto 1rem'>Inicia Sesion</Button>
						</Form>
					</Flex>
				</Box>
			</Flex>
		</Container>
	)
}

LoginScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default LoginScreen
