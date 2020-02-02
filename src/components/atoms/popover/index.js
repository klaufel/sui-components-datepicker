import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Popover = ({children, closeOnOutsideClick, isActive}) => {
  const wrapperRef = useRef()

  const [active, setActive] = useState(isActive)

  const handleOutsideClick = event => {
    if (closeOnOutsideClick && event.target === wrapperRef.current) {
      setActive(!active)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={`Popover ${active && 'is-active'}`}
      onClick={handleOutsideClick}
    >
      {children}
    </div>
  )
}

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  closeOnOutsideClick: PropTypes.boolean,
  isActive: PropTypes.boolean
}

export default Popover
