import React from 'react'
import PropTypes from 'prop-types'

import api from './api/client'
import AuthScreen from './screens/auth/auth.screen'
import { cUser, HubCallback } from './types.session'

const SessionContext = React.createContext({})

const SessionProvider: React.FC<{
	children: React.ReactNode
	isProtected: boolean
}> = ({ children, isProtected }) => {
	const [user, setUser] = React.useState<cUser | null>(null)

	const authListener: HubCallback = ({ payload: { event, data } }) => {
		switch (event) {
			case 'signIn':
				setUser({
					name: data.username,
					token: data.signInUserSession.accessToken,
				})
				break
			case 'signOut':
				setUser(null)
				break
			default:
				break
		}
	}

	React.useEffect(() => {
		const getCurrentSessionAndUser = async () => {
			try {
				const currentSession = await api.currentSession()
				const currentUser = await api.currentUser()
				setUser({
					name: currentUser.name,
					token: currentSession.getAccessToken(),
				})
				console.log(user)
			} catch (err) {
				console.error(err)
			}
		}

		getCurrentSessionAndUser()
	}, [user])

	React.useEffect(() => {
		api.hub.listen('auth', authListener)
		return () => api.hub.remove('auth', authListener)
	}, [])

	//if !login
	if (!user && isProtected) {
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
