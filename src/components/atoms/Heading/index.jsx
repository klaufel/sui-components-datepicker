import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const HEADINGS_TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']

const HEADINGS_SIZES = ['', 'small', 'huge']

const Heading = ({type, size, children, ...props}) => {
  const classname = `Heading${size && ` Heading--${size}`}`
  return React.createElement(type, {className: classname, ...props}, children)
}

Heading.propTypes = {
  type: PropTypes.oneOf(HEADINGS_TYPES),
  size: PropTypes.oneOf(HEADINGS_SIZES),
  children: PropTypes.node.isRequired
}

Heading.defaultProps = {
  type: 'h1',
  size: ''
}

export default Heading
