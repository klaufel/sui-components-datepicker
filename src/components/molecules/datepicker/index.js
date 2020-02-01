import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Popover from '../../atoms/Popover'
import FormField from '../FormField'
import Calendar from '../calendar'

const Datepicker = ({label, name}) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [calendarDate, setCalendarDate] = useState(null)
  const wrapperRef = useRef(null)

  const handleClick = () => {
    setShowCalendar(!showCalendar)
  }

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowCalendar(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setShowCalendar(false)
  }, [calendarDate])

  return (
    <div className="Datepicker" ref={wrapperRef}>
      <FormField
        label={label}
        name={name}
        type="text"
        readonly
        onClick={handleClick}
        defaultValue={calendarDate}
      />
      <Popover isActive={showCalendar}>
        <Calendar onDateChange={setCalendarDate} />
      </Popover>
    </div>
  )
}

Datepicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Datepicker
