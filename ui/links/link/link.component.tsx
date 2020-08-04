import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

interface ALinkProps {
	children: React.ReactNode
	routing?: () => void
	href?: string
	as?: string
	margin?: string
}

const ALink: React.FC<ALinkProps> = (props) => {
	return (
		<Link href={props.href || '#'} as={props.as}>
			<a onClick={props.routing}>
				{props.children}
				<style jsx>{`
					a {
						margin: ${props.margin || '1rem auto'};
					}
				`}</style>
			</a>
		</Link>
	)
}

ALink.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	routing: PropTypes.func,
	as: PropTypes.string,
}

export default ALink
