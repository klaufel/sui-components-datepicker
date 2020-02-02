import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Popover = ({children, onClose, isOpen}) => {
  const wrapperRef = useRef(null)
  const [isActive, setIsActive] = useState(isOpen)

  useEffect(() => {
    setIsActive(isOpen)
  }, [isOpen])

  const handleClickOutside = event => {
    if (
      isActive &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setIsActive(false)
      onClose && onClose(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  let classname = 'Popover'
  if (isActive) {
    classname += ' is-active'
  }
  return (
    <div ref={wrapperRef} className={classname}>
      {children}
    </div>
  )
}

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

Popover.defaultProps = {
  isOpen: false
}

export default Popover
