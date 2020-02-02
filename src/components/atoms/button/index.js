import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Button = ({onClick, disabled, children, ...props}) => (
  <button className="Button" disabled={disabled} onClick={onClick} {...props}>
    {children}
  </button>
)

Button.propTypes = {
  /** Content to be included in the button */
  children: PropTypes.node.isRequired,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  /** Click event */
  onClick: PropTypes.func
}

export default Button
