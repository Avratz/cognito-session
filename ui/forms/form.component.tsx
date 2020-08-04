import React from 'react'
import PropTypes from 'prop-types'
import {
	FlexDirectionProperty,
	JustifyContentProperty,
	AlignItemsProperty,
} from 'csstype'
import { StrOrNum } from '~/ui/types'

interface FormProps {
	children: React.ReactNode
	display?: string
	direction?: FlexDirectionProperty
	justify?: JustifyContentProperty
	align?: AlignItemsProperty
	width?: StrOrNum
	height?: StrOrNum
	handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = (props) => {
	return (
		<form onSubmit={(event) => props.handleSubmit(event)}>
			{props.children}
			<style jsx>{`
				form {
					display: ${props.display || 'block'};
					flex-direction: ${props.direction || 'row'};
					justify-content: ${props.justify || 'normal'};
					align-items: ${props.align || 'start'};
					width: ${props.width || 'auto'};
					height: ${props.height || 'auto'};
				}
			`}</style>
		</form>
	)
}

Form.propTypes = {
	children: PropTypes.node.isRequired,
	display: PropTypes.string,
	direction: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
	justify: PropTypes.string,
	align: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	handleSubmit: PropTypes.func,
}

export default Form
