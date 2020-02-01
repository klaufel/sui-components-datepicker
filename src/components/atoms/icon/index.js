import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import {iconList, iconNames} from './iconList'

const Icon = ({name}) => (
  <svg
    className="Icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    enableBackground="new 0 0 24 24"
  >
    {iconList[name]}
  </svg>
)

Icon.propTypes = {
  /** Name of icon, use of a list of names included in our design system:
   * ['chevronUp', 'chevronRight', 'chevronDown', 'chevronLeft']
   */
  name: PropTypes.oneOf(iconNames).isRequired
}

export default Icon
