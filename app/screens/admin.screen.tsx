import React from 'react'
import { useSession } from '~/session/hooks'
import Button from '~/ui/buttons/button/button.component'

const AdminScreen: React.FC = () => {
	//this is just an example
	const { state, actions } = useSession()
	console.log(state)
	return (
		<React.Fragment>
			<h1>Protected route</h1>
			<h2>user: {state.name}</h2>
			<Button handleClick={actions.signOut}>Salir</Button>
		</React.Fragment>
	)
}

export default AdminScreen
