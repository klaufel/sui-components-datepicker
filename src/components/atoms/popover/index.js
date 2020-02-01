import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Popover = ({children, isActive}) => (
  <div className={`Popover ${isActive && 'is-active'}`}>{children}</div>
)

export default Popover
