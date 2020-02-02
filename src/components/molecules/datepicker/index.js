import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Popover from '../../atoms/popover'
import FormField from '../formfield'
import Calendar from '../calendar'

const Datepicker = ({label, date, month, year, name}) => {
  const [isActive, setIsActive] = useState(false)

  const [calendarDate, setCalendarDate] = useState(date || null)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleClose = () => {
    setIsActive(false)
  }

  useEffect(() => {
    handleClose()
  }, [calendarDate])

  return (
    <div className="Datepicker">
      <FormField
        label={label}
        name={name}
        type="text"
        readonly
        defaultValue={calendarDate}
        onClick={handleClick}
      />
      <Popover isOpen={isActive} onClose={handleClose}>
        <Calendar
          onDateChange={setCalendarDate}
          date={date}
          month={month}
          year={year}
        />
      </Popover>
    </div>
  )
}

Datepicker.propTypes = {
  /** The label itself */
  label: PropTypes.string.isRequired,
  /** Sets the name property of an element in the DOM */
  name: PropTypes.string.isRequired,
  /** Default date, format: dd/mm/yyyy  */
  date: PropTypes.string,
  /** Default month to display in calendar  */
  month: PropTypes.number,
  /** Default year to display in calendar  */
  year: PropTypes.number
}

export default Datepicker
