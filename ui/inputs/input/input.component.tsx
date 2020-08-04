import React from 'react'
import PropTypes from 'prop-types'
import { StrOrNum } from '~/ui/types'

import styles from './input.module.scss'

interface InputProps {
	type?: string
	name: string
	id: string
	placeholder: string
	margin?: StrOrNum
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => (
	<React.Fragment>
		<input
			type={props.type || 'text'}
			name={props.name}
			id={props.id}
			className={styles.input}
			placeholder={props.placeholder}
			onChange={
				props.handleChange ? (event) => props.handleChange(event) : null
			}
		/>

		<style jsx>{`
			input {
				margin: ${props.margin || '1rem auto'};
			}
		`}</style>
	</React.Fragment>
)

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
}

export default Input
