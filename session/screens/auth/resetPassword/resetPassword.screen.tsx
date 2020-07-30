import React from 'react'
import PropTypes from 'prop-types'
import api from '~/session/api/client'

const ResetPasswordScreen: React.FC<{
	routing: React.Dispatch<React.SetStateAction<string>>
}> = ({ routing }) => {
	return <div>Reset Password Screen</div>
}

ResetPasswordScreen.propTypes = {
	routing: PropTypes.func.isRequired,
}

export default ResetPasswordScreen
