import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Input = ({...props}) => {
  return (
    <div className="FormField">
      <input className="FormField-input" {...props} />
    </div>
  )
}

export default Input
