import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './Custombutton.module.scss'

interface ButtonProps {
	children: React.ReactNode
	handleClick?: () => void
	href?: string
	as?: string
	margin?: string
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<Link href={props.href || '#'} as={props.as}>
			<a className={styles.customButton} onClick={props.handleClick}>
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

Button.propTypes = {
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func,
	href: PropTypes.string,
	as: PropTypes.string,
}

export default Button
