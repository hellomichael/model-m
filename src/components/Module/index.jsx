import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.scss'

const Module = ({ children, className }) => {
  let classnames = classNames({
    [styles.module]: true,
    [`${className}`]: className ? true : false
  })
  return <div className={ classnames }>{children}</div>
}

Module.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Module
