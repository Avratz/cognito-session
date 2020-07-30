import React from 'react'
import PropTypes from 'prop-types'
import api from '~/session/api/client'

const SingupScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	return <div>Singup Screen</div>
}

SingupScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default SingupScreen
