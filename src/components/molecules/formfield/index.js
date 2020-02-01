import React from 'react'
import PropTypes from 'prop-types'
import Label from '../../atoms/label'
import Input from '../../atoms/Input'
import './index.scss'

const FormField = ({label, name, onClick, readonly, ...props}) => {
  return (
    <div className="FormField">
      {label && (
        <Label name={name} text={label}>
          {label}
        </Label>
      )}
      <Input
        type="text"
        id={name}
        readOnly={readonly}
        onClick={onClick}
        {...props}
      />
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  readonly: PropTypes.bool
}

export default FormField
