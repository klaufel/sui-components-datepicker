import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Button = ({onClick, children, ...props}) => (
  <button className="Button" onClick={onClick} {...props}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Button
