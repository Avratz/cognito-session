import React from 'react'
import PropTypes from 'prop-types'
import { StrOrNum } from '~/ui/types'

import styles from './container.module.scss'

interface ContainerProps {
	children: React.ReactNode
	width?: StrOrNum
	height?: StrOrNum
	margin?: StrOrNum
	backgroundColor?: StrOrNum
}

const Container: React.FC<ContainerProps> = (props) => {
	return (
		<div className={styles.container}>
			{props.children}
			<style jsx>{`
				div {
					background-color: ${props.backgroundColor || 'transparent'};
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
