import React from 'react'
import PropTypes from 'prop-types'
import { StrOrNum } from '~/ui/types'

interface ContainerProps {
	children: React.ReactNode
	width?: StrOrNum
	height?: StrOrNum
	margin?: StrOrNum
	backgroundColor?: StrOrNum
}

const Container: React.FC<ContainerProps> = (props) => {
	return (
		<div>
			{props.children}
			<style jsx>{`
				div {
					width: ${props.width || '100%'};
					height: ${props.height || '100vh'};
					background-color: ${props.backgroundColor || 'transparent'};
					padding-left: 1rem;
					padding-right: 1rem;
				}
			`}</style>
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	backgroundColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Container
