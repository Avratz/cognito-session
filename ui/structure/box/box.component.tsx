import React from 'react'
import PropTypes from 'prop-types'
import { StrOrNum, breakpointSize } from '~/ui/types'
import {
	FlexDirectionProperty,
	JustifyContentProperty,
	AlignItemsProperty,
} from 'csstype'

interface BoxProps {
	children: React.ReactNode
	margin?: StrOrNum
	padding?: StrOrNum
	backgroundColor?: StrOrNum
	borderRadius?: StrOrNum
	initialSize?: breakpointSize
	tabletSize?: breakpointSize
	desktopSize?: breakpointSize
	render?: {
		display?: string
		direction?: FlexDirectionProperty
		justify?: JustifyContentProperty
		align?: AlignItemsProperty
	}
}

const Box: React.FC<BoxProps> = (props) => {
	return (
		<div>
			{props.children}
			<style jsx>
				{`
					div {
						width: ${props.initialSize?.width};
						height: ${props.initialSize?.height};
						max-width: ${props.initialSize?.maxWidth};
						max-height: ${props.initialSize?.maxHeight};
						min-width: ${props.initialSize?.minWidth};
						min-height: ${props.initialSize?.minHeight};
						padding: ${props.padding || '0px'};
						background-color: ${props.backgroundColor || 'transparent'};
						border-radius: ${props.borderRadius || '0px'};
						display: ${props.render?.display || 'inherit'};
						flex-direction: ${props.render?.direction || 'inherit'};
						justify-content: ${props.render?.justify || 'inherit'};
						align-items: ${props.render?.align || 'inherit'};
					}

					@media (min-width: 768px) {
						div {
							width: ${props.tabletSize?.width};
							height: ${props.tabletSize?.height};
							max-width: ${props.tabletSize?.maxWidth};
							max-height: ${props.tabletSize?.maxHeight};
							min-width: ${props.tabletSize?.minWidth};
							min-height: ${props.tabletSize?.minHeight};
						}
					}

					@media (min-width: 1200px) {
						div {
							width: ${props.desktopSize?.width};
							height: ${props.desktopSize?.height};
							max-width: ${props.desktopSize?.maxWidth};
							max-height: ${props.desktopSize?.maxHeight};
							min-width: ${props.desktopSize?.minWidth};
							min-height: ${props.desktopSize?.minHeight};
						}
					}
				`}
			</style>
		</div>
	)
}

Box.propTypes = {
	children: PropTypes.node,
	backgroundColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	tabletSize: PropTypes.shape({
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	}),
	desktopSize: PropTypes.shape({
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	}),
	render: PropTypes.shape({
		display: PropTypes.string,
		direction: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
		justify: PropTypes.string,
		align: PropTypes.string,
	}),
}

export default Box
