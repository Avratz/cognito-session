import React from 'react'
import PropTypes from 'prop-types'
import { StrOrNum } from '~/ui/types'

interface BoxProps {
	children: React.ReactNode
	width?: StrOrNum
	height?: StrOrNum
	margin?: StrOrNum
	backgroundColor?: StrOrNum
	borderRadius?: StrOrNum
}

const Box: React.FC<BoxProps> = (props) => {
	return (
		<div>
			{props.children}
			<style jsx>{`
				div {
					width: ${props.width || 'auto'};
					height: ${props.height || 'auto'};
					background-color: ${props.backgroundColor || 'transparent'};
					border-radius: ${props.borderRadius || '0px'};
				}
			`}</style>
		</div>
	)
}

Box.propTypes = {
	children: PropTypes.node,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	backgroundColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Box
