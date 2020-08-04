import React from 'react'
import PropTypes from 'prop-types'
import {
	FlexDirectionProperty,
	JustifyContentProperty,
	AlignItemsProperty,
} from 'csstype'

import { StrOrNum } from '~/ui/types'
interface FlexProps {
	children: React.ReactNode
	direction?: FlexDirectionProperty
	justify?: JustifyContentProperty
	align?: AlignItemsProperty
	width?: StrOrNum
	height?: StrOrNum
	minHeight?: StrOrNum
}

const Flex: React.FC<FlexProps> = (props) => {
	return (
		<div>
			{props.children}

			<style jsx>{`
				div {
					display: flex;
					flex-direction: ${props.direction || 'row'};
					justify-content: ${props.justify || 'normal'};
					align-items: ${props.align || 'start'};
					width: ${props.width || 'auto'};
					height: ${props.height || 'auto'};
					min-height: ${props.minHeight || 'auto'};
				}
			`}</style>
		</div>
	)
}

Flex.propTypes = {
	children: PropTypes.node.isRequired,
	direction: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
	justify: PropTypes.string,
	align: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Flex
