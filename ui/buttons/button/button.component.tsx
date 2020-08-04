import React from 'react'
import PropTypes from 'prop-types'

import styles from './Custombutton.module.scss'

interface ButtonProps {
	children: React.ReactNode
	margin?: string
	type?: 'button' | 'submit' | 'reset'
	handleClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={styles.customButton}
			type={props.type ? props.type : 'button'}
			onClick={props.handleClick ? () => props.handleClick() : null}
		>
			{props.children}

			<style jsx>{`
				button {
					margin: ${props.margin || '1rem auto'};
				}
			`}</style>
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	margin: PropTypes.string,
	type: PropTypes.any,
}

export default Button
