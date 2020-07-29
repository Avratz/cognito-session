import React from 'react'

import AdminLayout from '~/app/layout/admin.layout'
import { Provider as SessionProvider } from '~/session/context'

import AdminScreen from '~/app/screens/admin.screen'

const IndexPage: React.FC = () => {
	return (
		<AdminLayout>
			<SessionProvider>
				<AdminScreen />
			</SessionProvider>
		</AdminLayout>
	)
}

export default IndexPage
