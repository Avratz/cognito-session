import React from 'react'
import AdminScreen from '~/app/screens/admin.screen'
import AdminLayout from '~/app/layout/admin.layout'

const IndexPage: React.FC = () => {
	return (
		<AdminLayout>
			<AdminScreen />
		</AdminLayout>
	)
}

export default IndexPage
