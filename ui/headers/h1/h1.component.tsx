import React from 'react'
import PropTypes from 'prop-types'
import { TextAlignProperty } from 'csstype'

interface H1Props {
	children: React.ReactNode
	align?: TextAlignProperty
	margin?: string
}

const Header1: React.FC<H1Props> = (props) => {
	return (
		<h1>
			{props.children}
			<style jsx>{`
				h1 {
					color: white;
					text-align: ${props.align || 'left'};
					margin: ${props.margin || 'inherit'};
				}
			`}</style>
		</h1>
	)
}

Header1.propTypes = {
	children: PropTypes.node.isRequired,
	align: PropTypes.any,
	margin: PropTypes.string,
}

export default Header1
