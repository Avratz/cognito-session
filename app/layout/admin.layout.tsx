import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { META } from '../constants/config'

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Head>
				<title>`Admin Page | ${META.title}`</title>
				<meta content={META.theme} name='theme-color' />
				<meta content={META.description} name='description' />
				<meta content={META.keywords} name='keywords' />
				<meta content={META.author} name='author' />
			</Head>
			{children}
		</>
	)
}

AdminLayout.propTypes = {
	children: PropTypes.node,
}

export default AdminLayout
