import React from 'react'
import PropTypes from 'prop-types'

import AuthScreen from './screens/auth/auth.screen'

const SessionContext = React.createContext({})

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = React.useState<null>(null)

	//if !login,
	if (!user) {
		return <AuthScreen />
	}

	//else show the children,
	return (
		<SessionContext.Provider value={{}}>{children}</SessionContext.Provider>
	)
}

SessionProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { SessionProvider as Provider, SessionContext as default }
