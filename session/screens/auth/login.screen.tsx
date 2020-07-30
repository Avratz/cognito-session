import React from 'react'
import PropTypes from 'prop-types'

import api from '~/session/api/client'

const LoginScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	return <div>LoginScreen</div>
}

LoginScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default LoginScreen
