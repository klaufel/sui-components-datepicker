import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Icon from '../../atoms/Icon'
import {
  getCalendarDays,
  getMonthName,
  getNextMonth,
  getPrevMonth,
  getDateFormat,
  WEEKDAYS_NAMES
} from './dates'

const Calendar = ({onDateChange}) => {
  const actualDate = new Date()
  const [dateSelected, setDateSelected] = useState({
    year: actualDate.getFullYear(),
    month: actualDate.getMonth() + 1
  })
  const daysInMonth = getCalendarDays(dateSelected.year, dateSelected.month)
  const [dateFull, setDateFull] = useState(
    getDateFormat(dateSelected.year, dateSelected.month)
  )

  const handleNextMonth = () => {
    setDateSelected(getNextMonth(dateSelected.year, dateSelected.month + 1))
  }

  const handlePrevMonth = () => {
    setDateSelected(getPrevMonth(dateSelected.year, dateSelected.month - 1))
  }

  const handleClickDay = date => {
    setDateFull(date)
    onDateChange && onDateChange(date)
  }

  return (
    <div className="Calendar">
      <div className="Calendar-topBar">
        <span
          className="Calendar-arrow Calendar-arrow--left"
          onClick={handlePrevMonth}
        >
          <Icon name="chevronLeft" />
        </span>
        <span className="Calendar-month">
          {getMonthName(dateSelected.month)} / {dateSelected.year}
        </span>
        <span
          className="Calendar-arrow Calendar-arrow--right"
          onClick={handleNextMonth}
        >
          <Icon name="chevronRight" />
        </span>
      </div>
      <div className="Calendar-days">
        {WEEKDAYS_NAMES.map(name => (
          <div key={name} className="Calendar-dayWeeks">
            {name}
          </div>
        ))}
        {daysInMonth.map(dates => {
          const {day, date, month} = dates
          return (
            <div
              key={date}
              title={date}
              className={`Calendar-day Calendar-day--${month} ${date ===
                dateFull && 'is-selected'}`}
              onClick={() => handleClickDay(date)}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Calendar.propTypes = {
  /** Callback to return a selected date */
  onDateChange: PropTypes.func
}

export default Calendar
