import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Input = ({
  id,
  name,
  placeholder,
  value,
  disabled,
  readonly,
  ...props
}) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      disabled={disabled}
      readOnly={readonly}
      className="Input"
      {...props}
    />
  )
}

Input.propTypes = {
  /* The DOM id global attribute */
  id: PropTypes.string,
  /* Sets the name property of an element in the DOM */
  name: PropTypes.string,
  /* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds */
  placeholder: PropTypes.string,
  /* Default value of the input */
  value: PropTypes.string,
  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /* This Boolean attribute prevents the user modify the value of input */
  readonly: PropTypes.bool
}

export default Input
