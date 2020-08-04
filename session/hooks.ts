import React from 'react'

import SessionContext from './context'

export function useSession() {
	return React.useContext(SessionContext)
}
